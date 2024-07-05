export default function Rules() {
  return (
    <main className="min-h-screen container mx-auto p-10 space-y-20">
      <div className="space-y-2">
        <h1 className="text-xl">Scooter Simulator Rules!</h1>

        <ol className="list-decimal list-inside">
          <li>This game isn&apos;t a multiplayer game.</li>
          <li>You can level up to unlock more mechanics and other stuff.</li>
          <li>Starting level is 1, Max level is 25.</li>
          <li>
            Take a look at the table bellow to know the requirements for each
            level.
          </li>
        </ol>
      </div>

      <table className="w-full max-w-sm">
        <thead>
          <tr>
            <th className="text-left">Level</th>
            <th className="text-left">Required Experience</th>
            <th className="text-left">Unlocks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{(0).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{(150).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{(300).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{(600).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{(1000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{(1700).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{(3000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{(5000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{(8500).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>{(12000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>11</td>
            <td>{(20000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>12</td>
            <td>{(33000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>13</td>
            <td>{(62500).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>14</td>
            <td>125000</td>
          </tr>
          <tr>
            <td>15</td>
            <td>{(175000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>16</td>
            <td>{(235000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>17</td>
            <td>{(300000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>18</td>
            <td>{(400000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>19</td>
            <td>{(500000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>20</td>
            <td>{(625000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>21</td>
            <td>{(750000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>22</td>
            <td>{(875000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>23</td>
            <td>{(1000000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>24</td>
            <td>{(1350000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
          <tr>
            <td>25</td>
            <td>{(2500000).toLocaleString("en", { useGrouping: true })}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
