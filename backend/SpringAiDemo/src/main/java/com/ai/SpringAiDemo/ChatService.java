package com.ai.SpringAiDemo;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.stereotype.Service;

@Service

public class ChatService {
  private final ChatModel chatModel;

  public ChatService(ChatModel chatModel) {
    this.chatModel = chatModel;
  }

  public String getResponse(String prompt) {
    return chatModel.call(prompt);
  }

  public ChatResponse getResponseOptions(String prompt) {
    return chatModel.call(
        new Prompt(
            prompt,
            OpenAiChatOptions.builder()
                .withModel("gpt-4-o")
                .withTemperature(0.4)
                .build()));
  }
}
