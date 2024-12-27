package com.ai.SpringAiDemo;

import org.springframework.ai.image.Image;
import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
  private final OpenAiImageModel openAiImageModel;

  public ImageService(OpenAiImageModel openAiImageModel) {
    this.openAiImageModel = openAiImageModel;
  }

  public ImageResponse generateImage(String prompt) {
    // ImageResponse imageResponse = openAiImageModel.call(
    // new ImagePrompt(prompt));

    ImageResponse imageResponse = openAiImageModel.call(
        new ImagePrompt(prompt,
            OpenAiImageOptions.builder()
                .withQuality("hd")
                .withN(2)
                .withHeight(1024)
                .withWidth(1024).build()));
    return imageResponse;
  }

}
