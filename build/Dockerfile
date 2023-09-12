ARG DENO_VERSION=1.36.1
FROM denoland/deno:alpine-$DENO_VERSION

# define workdir
WORKDIR /app
RUN chown deno:deno /app

# These steps will be re-run upon each file change in your working directory:
ADD . .

# adjust permissions
RUN chown -R deno:deno /app/*

# Prefer not to run as root.
USER deno

# # Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# # Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
# COPY deps.ts .
# RUN deno cache deps.ts

# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN deno cache main.ts
RUN deno run -A dev.ts build

EXPOSE 8000
CMD ["run", "--cached-only", "--allow-env=ESBUILD_BINARY_PATH,XDG_CACHE_HOME,HOME,DENO_REGION,DENO_DEPLOYMENT_ID,PORT,HOSTNAME", "--allow-read=/app", "--allow-net=0.0.0.0,kratos.qernal-bld.dev,chaos.qernal-bld.dev", "main.ts"]