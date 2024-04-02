export interface NavItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

export interface GeneralItem {
  title: string;
  id: number;
}

export interface Language extends GeneralItem {
  nativeTitle: string;
}

export interface GeneralResultModel {
  id: string;
  choices: Choice[];
  created: number;
  model: string;
  object: string;
  system_fingerprint: null;
  usage: Usage;
}

export interface Choice {
  finish_reason: string;
  index: number;
  logprobs: null;
  message: Message;
}

export interface Message {
  content: string;
  role: string;
  function_call: null;
  tool_calls: null;
}

export interface Usage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}
