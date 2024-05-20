export interface IUserMessage {
  model: string,
  temperature: number | string,
  messages: { role: 'user' | string, content: string }[],
}

export interface IBotMessage {
  id: string,
  object: string,
  created: number,
  model: String,
  usage: {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
  },
  choices: [
    {
      message: {
        role: string,
        content: string
      },
      logprobs: string | null,
      finish_reason: string,
      index: number
    }
  ]
}
