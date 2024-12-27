package com.ai.SpringAiDemo;

import java.io.IOException;

import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;

@RestController

public class GenAIController {
  ChatService chatService;
  ImageService imageService;

  public GenAIController(ChatService chatService) {
    this.chatService = chatService;
    this.imageService = imageService;
  }

  @GetMapping("/ask-ai")
  public String getResponse(@RequestParam String prompt) {
    return chatService.getResponse(prompt);
  }
  // public String response() {
  // return "hello";
  // }

  @GetMapping("/ask-ai-options")
  public String getResponseOptions(@RequestParam String prompt) {
    return chatService.getResponseOptions(prompt);
  }

  @GetMapping("/generate-image")
  public void generateImages(HttpServletResponse response, @RequestParam String prompt) throws IOException {
    ImageResponse imageResponse = imageService.generateImage(prompt);
    String imageUrl = imageResponse.getResult().getOutput().getUrl();
    response.sendRedirect(imageUrl);
  }
}
