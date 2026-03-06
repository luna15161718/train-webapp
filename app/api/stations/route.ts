export async function GET() {
    const stations = await fetch("https://api1.raildata.org.uk/1010-nationalrail-knowledgebase-stations-feed-_json_---production5_0/stations", {
      method: "GET",
      headers: {
        "x-apikey": "oQbM0WJLhR7L9bEubMlVyPwtH7uV53AlUcdOTze3AsG9Jk1V"
      }
    }).then(r => r.json())
    const stationMap = stations.stations.map(s => ({id: s.name}))
    return Response.json(stationMap)
}