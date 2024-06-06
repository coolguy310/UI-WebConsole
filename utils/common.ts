function redirect(url: string, status: number) {
  const headers = new Headers();
  headers.set("location", url);
  return new Response(null, {
    status,
    headers,
  });
}

export { redirect };
