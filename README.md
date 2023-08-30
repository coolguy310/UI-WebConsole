# ui-webconsole

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Changes

1. Fresh `_layout` instead of manual layout at
   [`./components/layouts/*`](./components/layouts/).
2. Re-classify `islands` that weren't needed to be islands. Fresh is SSR, so
   even though there is JavaScript at the file, the server will process it and
   send to the client the processed HTML. This means that the JavaScript won't
   get stripped out by the server because it's executed by it! Only the files
   that **need** client side JavaScript should be islands, such as files using
   `hooks` or `DOM` APIs
3. Import map alias for path to keep everything relative to the root. This
   allows us to remove the spaghetti imports that were happening before. Only
   [`./routes/auth/*`](./routes/auth/) has been changed, since it's an example.

### Further Improvements

1. Remove client side JavaScript from `islands` that don't need it. This will
   reduce the bundle size and improve performance. This is a big one. There's
   currently a heavy use on `hooks` that make the page size increase a lot. Join
   the interactivity together in bigger islands with shared logic.
2. Make more use of fresh specific features such as `_middleware.ts`, for
   example for authentication, or Google Analytics, `_404.tsx` for a custom 404
   and `_500.tsx` for a custom 500 page.
3. Add a `site.webmanifest` file to make it a PWA.
4. Make use of the [`./routes/api/*`](./routes/api/) folder to create an API
   that can be used by the client side JavaScript. This will allow us to remove
   the `islands` that are only there to fetch data from the server.
