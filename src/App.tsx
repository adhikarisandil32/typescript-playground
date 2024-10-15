import { CampaignDataType } from "./types/campaignData"

function App() {
  const campaignData: CampaignDataType = {
    title: "Launch new strawberry flavour",
    campaignId: "#4630",
    startDate: "12 Jan 2023",
    endDate: "12 Jun 2023",
    milestones: [
      {
        number: "01",
        startDate: "31 Dec 22",
        endDate: "12 Jan 23",
        status: "completed",
      },
      {
        number: "01",
        startDate: "12 Jan 23",
        endDate: "24 Jan 23",
        status: "active",
      },
      {
        number: "03",
        startDate: "24 Jan 23",
        endDate: "17 Mar 23",
        status: "upcoming",
      },
      {
        number: "04",
        startDate: "17 Mar 23",
        endDate: "12 Jun 23",
        status: "upcoming",
      },
    ],
  }

  return (
    <div className="min-h-screen dark dark:bg-black dark:text-white">
      <div className="container">{JSON.stringify(campaignData)}</div>
    </div>
  )
}

export default App
