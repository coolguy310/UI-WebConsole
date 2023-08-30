const Providers = () => {
  const list = [
    {
      name: "AWS",
      src: "./aws.png",
    },
    {
      name: "Google Cloud Platform",
      src: "./gcp.png",
    },
    {
      name: "DigitalOcean",
      src: "./do.png",
    },
    {
      name: "Microsoft Azure",
      src: "./azure.png",
    },
  ]
  return (
    <div class="my-40">
      <h3 class="text-2xl font-semibold text-center">Our Supported Providers</h3>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
        {list.map((item) => (
          <img class="m-2" src={item.src} alt={item.name} />
        ))}
      </div>
    </div>
  )
}
export default Providers
