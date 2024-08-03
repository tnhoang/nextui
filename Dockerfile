FROM node:20.16.0-bullseye-slim
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

ENV NODE_ENV production
ENV PORT 3000

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm fund
RUN npm run telemetry-disable
RUN npm run build

USER node

EXPOSE 3000

CMD ["dumb-init", "npm", "start"]
HEALTHCHECK --interval=10s --timeout=2s --start-period=15s \  
CMD curl -fs http://localhost:3000/api/health || exit 1