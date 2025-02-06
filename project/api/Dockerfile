FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production --frozen-lockfile
COPY tsconfig.json ./
COPY src/ ./src/
RUN npm install -g typescript
RUN tsc
RUN npm uninstall -g typescript && \
    rm -rf src/ && \
    rm tsconfig.json
EXPOSE 3000
CMD ["node", "dist/index.js"]
