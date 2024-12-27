package com.ai.SpringAiDemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class GenAIController {
  ChatService chatService;

  public GenAIController(ChatService chatService) {
    this.chatService = chatService;
  }

  @GetMapping("/ask-ai")
  // public String getResponse(@RequestParam String prompt) {
  // return chatService.getResponse(prompt);
  // }
  public String response() {
    return "hello";
  }
}
