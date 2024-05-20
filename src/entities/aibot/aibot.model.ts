export interface IUserMessage {
  model: 'claude-3-opus-20240229' | string,
  max_tokens: number,
  messages: { role: 'user' | string, content: string }[],
}

export interface IBotMessage {
  content: { text: string, type: string }[],
  id: string,
  model: string,
  role: string,
  stop_reason: string,
  stop_sequence: string | null,
  type: string,
  usage: {
    input_tokens: number,
    output_tokens: number,
  },
}
