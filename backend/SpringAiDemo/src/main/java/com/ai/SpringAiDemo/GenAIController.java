package com.ai.SpringAiDemo;

import java.io.IOException;

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

  /*
   * @GetMapping("/generate-image")
   * public void generateImages(HttpServletResponse response, @RequestParam String
   * prompt) throws IOException {
   * ImageResponse imageResponse = imageService.generateImage(prompt);
   * String imageUrl = imageResponse.getResult().getOutput().getUrl();
   * response.sendRedirect(imageUrl);
   * }
   */

  @GetMapping("/generate-image")
  public void generateImages(HttpServletResponse response, @RequestParam String prompt) throws IOException {
    ImageResponse imageResponse = imageService.generateImage(prompt);

    // Streams is going to used ffor getting urls from IageResponse for mjltiple
    // images

  }

  /*
   * @GetMapping("/generate-image")
   * public void generateImages(HttpServletResponse response, @RequestParam String
   * prompt) throws IOException {
   * try {
   * ImageResponse imageResponse = imageService.generateImage(prompt);
   * if (imageResponse == null || imageResponse.getResult() == null ||
   * imageResponse.getResult().getOutput() == null) {
   * response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Failed to
   * generate image.");
   * return;
   * }
   * String imageUrl = imageResponse.getResult().getOutput().getUrl();
   * if (imageUrl == null || imageUrl.isEmpty()) {
   * response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Generated
   * image URL is invalid.");
   * return;
   * }
   * response.sendRedirect(imageUrl);
   * } catch (Exception e) {
   * e.printStackTrace();
   * response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "An error
   * occurred while generating the image.");
   * }
   * }
   */

}
