export function Schedule() {
  const events = [
    {
      date: "11-july",
      event: "arrival and registration",
      location: "Tashkent International Airport (TAS)",
    },
    {
      date: "12-july",
      event: "opening ceremony",
      location: "Congress Hall Tashkent City",
    },
    {
      date: "13-july",
      event: "practical exam discussion and translation",
      location: "Hotel Hilton Tashkent City",
    },
    {
      date: "14-july",
      event: "practical exam",
      location: "National University of Uzbekistan",
    },
    {
      date: "15-july",
      event: "theory exam discussion and translation",
      location: "Hotel Hilton Tashkent City",
    },
    { date: "16-july", event: "theory exam", location: "Zakovat Arena" },
    {
      date: "17-july",
      event: "corrections, paper evaluation",
      location: "Hotel Hilton Tashkent City",
    },
    {
      date: "18-july",
      event: "moderation meeting, arbitration",
      location: "Hotel Hilton Tashkent City",
    },
    {
      date: "19-july",
      event: "closing ceremony, farewell dinner",
      location: "Symposium Palace in Tashkent",
    },
    {
      date: "20-july",
      event: "departure",
      location: "Tashkent International Airport (TAS)",
    },
  ];

  return (
    <section
      id="schedule"
      className="py-20 px-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Program of Events
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Events</th>
                <th className="px-6 py-3 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {events.map((item, index) => (
                <tr
                  key={item.date}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-6 py-4 capitalize">{item.date}</td>
                  <td className="px-6 py-4 capitalize">{item.event}</td>
                  <td className="px-6 py-4 capitalize">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
