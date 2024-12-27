package com.ai.SpringAiDemo;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;

@RestController

public class GenAIController {
  private final ChatService chatService;
  private final ImageService imageService;

  public GenAIController(ChatService chatService, ImageService imageService) {
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

  // @GetMapping("generate-image")
  // public void generateImages(HttpServletResponse response, @RequestParam String
  // prompt) throws IOException {
  // ImageResponse imageResponse = imageService.generateImage(prompt);
  // String imageUrl = imageResponse.getResult().getOutput().getUrl();
  // response.sendRedirect(imageUrl);
  // }

  @GetMapping("generate-image")
  public List<String> generateImages(HttpServletResponse response, @RequestParam String prompt) throws IOException {
    ImageResponse imageResponse = imageService.generateImage(prompt);

    // Streams is going to used for getting urls from ImageResponse for multiple
    // image generations
    List<String> imageUrls = imageResponse.getResults().stream()
        .map(result -> result.getOutput().getUrl())
        .toList();

    return imageUrls;

  }

}
