package com.ai.SpringAiDemo;

import org.springframework.web.bind.annotation.RestController;

@RestController

public class GenAIController {
  ChatService chatService;

  public GenAIController(ChatService chatService) {
    this.chatService = chatService;
  }

  public String getResponse(String prompt) {
    return chatService.getResponse(prompt);
  }
}
