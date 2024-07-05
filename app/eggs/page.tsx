export default function Eggs() {
  let dollar = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main className="min-h-screen container mx-auto p-10 space-y-20">
      <div className="space-y-2">
        <h1 className="text-xl">Scooter Simulator Eggs!</h1>

        <ol className="list-decimal list-inside">
          <li>In-order to buy an you have to spend gold.</li>
          <li>You can earn gold from playing</li>
          <li>Different eggs cost a different amount of gold.</li>
          <li>
            Check out the table bellow to see how much different eggs cost.
          </li>
          <li>And scooter info.</li>
        </ol>
      </div>

      <table className="w-full max-w-2xl">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Price</th>
            <th className="text-left">Scooters</th>
            <th className="text-left">Golden Edition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spawn Egg</td>
            <td>{dollar.format(350)}</td>
            <td>
              <ul className="list-inside list-disc">
                <li>Wood Scooter</li>
                <li>Stone Scooter</li>
                <li>Bronze Scooter</li>
              </ul>
            </td>
            <td>{dollar.format(3125)}</td>
          </tr>
          <tr>
            <td>Competitive Egg</td>
            <td>{dollar.format(1500)}</td>
            <td>
              <ul className="list-inside list-disc">
                <li>Super Scooter</li>
                <li>Spotted Scooter</li>
                <li>Gym Scooter</li>
                <li>Mega Scooter</li>
              </ul>
            </td>
            <td>{dollar.format(13500)}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
