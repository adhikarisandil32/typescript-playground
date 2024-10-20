import { campaign_data as campaignData } from "@/json_data/campaign_data.json"

type Prettify<T> = {
  [K in keyof T]: T[K]
}

export type CampaignDataType = Prettify<
  Omit<typeof campaignData, "milestones"> & {
    milestones: Prettify<
      Omit<(typeof campaignData.milestones)[0], "status"> & {
        status: "upcoming" | "active" | "completed"
      }
    >[]
  }
>
