import { campaignData } from "@/json_data/campaign_data.json"

export type CampaignDataType = Omit<typeof campaignData, "milestones"> & {
  milestones: (Omit<(typeof campaignData.milestones)[0], "status"> & { status: "upcoming" | "active" | "completed" })[]
}
