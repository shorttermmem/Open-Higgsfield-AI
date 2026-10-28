// Generated from https://docs.kie.ai model schemas.
export const kieT2I = [
  {
    "id": "nano-banana-pro--t2i",
    "slug": "nano-banana-pro",
    "name": "Nano Banana Pro",
    "family": "nano-banana-pro",
    "description": "Google - Nano Banana Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_input",
    "imageFieldType": "array",
    "maxImages": 8,
    "resolutionField": "resolution"
  },
  {
    "id": "nano-banana-2--t2i",
    "slug": "nano-banana-2",
    "name": "Nano Banana 2",
    "family": "nano-banana-2",
    "description": "Google - Nano Banana 2",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "1:4",
          "4:1",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "1:8",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_input",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "output_format": "jpg"
    }
  },
  {
    "id": "gpt-image-2-text-to-image--t2i",
    "slug": "gpt-image-2-text-to-image",
    "name": "GPT Image-2 Text to Image",
    "family": "gpt-image-2-text-to-image",
    "description": "GPT Image-2 - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt. Required, maximum 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "5:4",
          "4:5",
          "16:9",
          "9:16",
          "2:1",
          "1:2",
          "3:1",
          "1:3",
          "21:9",
          "9:21"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "flux-2-pro-text-to-image--t2i",
    "slug": "flux-2/pro-text-to-image",
    "name": "Flux-2 Pro Text to Image",
    "family": "flux-2",
    "description": "Flux-2 - Pro Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": " Must be between 3 and 5000 characters. (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "3:2",
          "2:3"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "seedream-5-pro-text-to-image--t2i",
    "slug": "seedream/5-pro-text-to-image",
    "name": "Seedream 5.0 Pro Text to Image",
    "family": "seedream",
    "description": "Seedream5.0 Pro - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, 4–5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "basic",
          "high"
        ],
        "default": "basic"
      }
    },
    "resolutionField": "quality",
    "defaults": {
      "output_format": "png"
    }
  },
  {
    "id": "google-imagen4--t2i",
    "slug": "google/imagen4",
    "name": "imagen4",
    "family": "google",
    "description": "Google - imagen4",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing what you want to see (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "auto"
        ],
        "default": "1:1"
      }
    }
  },
  {
    "id": "ideogram-v3-text-to-image--t2i",
    "slug": "ideogram/v3-text-to-image",
    "name": "Ideogram V3 Text to Image",
    "family": "ideogram",
    "description": "Ideogram V3 Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Description of the image to generate. Maximum length: 5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_16_9"
        ],
        "default": "square"
      }
    },
    "resolutionField": "image_size"
  },
  {
    "id": "z-image--t2i",
    "slug": "z-image",
    "name": "Z-Image",
    "family": "z-image",
    "description": "Z-Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 1000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16"
        ],
        "default": "1:1"
      }
    }
  },
  {
    "id": "flux-3-klein-text-to-image--t2i",
    "slug": "flux-3/klein-text-to-image",
    "name": "FLUX 3 Klein Text to Image",
    "family": "flux-3",
    "description": "FLUX 3 Klein Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "16:9",
          "9:16",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "output_format": "png",
      "num_images": 1,
      "enhance_prompt": true
    }
  },
  {
    "id": "flux-2-flex-text-to-image--t2i",
    "slug": "flux-2/flex-text-to-image",
    "name": "Flux-2 Text to Image",
    "family": "flux-2",
    "description": "Flux-2 - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Generation prompt, length must be between 3-5000 characters. (Maximum length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "3:2",
          "2:3"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "4o-image-api--t2i",
    "slug": "4o-image-api",
    "name": "Generate 4o Image",
    "family": "4o-image-api",
    "description": "Generate 4o Image",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "(Optional) Text prompt that conveys the creative idea you want the 4o model to render. Required if neither `files_url` nor `file_url` is supplied. At least one of `prompt` or `files_url` must be provi"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1:1",
          "3:2",
          "2:3"
        ],
        "default": "1:1"
      }
    },
    "imageField": "file_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "size"
  },
  {
    "id": "flux1-kontext--t2i",
    "slug": "flux1-kontext",
    "name": "Generate or Edit Image",
    "family": "flux1-kontext",
    "description": "Generate or Edit Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired image or edit. Required for both generation and editing modes.\n\n- Should be detailed and specific\n- For image editing, describe the desired changes\n- For image gener"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "21:9"
      }
    },
    "imageField": "input_image",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "model": "flux-kontext-pro",
      "output_format": "jpeg",
      "prompt_upsampling": false,
      "safety_tolerance": 2
    }
  },
  {
    "id": "gpt-image-2-image-to-image--t2i",
    "slug": "gpt-image-2-image-to-image",
    "name": "GPT Image 2 Image To Image",
    "family": "gpt-image-2-image-to-image",
    "description": "GPT Image 2 - Image To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts, up to 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "5:4",
          "4:5",
          "16:9",
          "9:16",
          "2:1",
          "1:2",
          "3:1",
          "1:3",
          "21:9",
          "9:21"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 16,
    "resolutionField": "resolution"
  },
  {
    "id": "gpt-image-2-5-flare-image-to-image--t2i",
    "slug": "gpt-image-2-5-flare-image-to-image",
    "name": "GPT Image 2.5 Flare Image To Image",
    "family": "gpt-image-2-5-flare-image-to-image",
    "description": "GPT Image 2.5 Flare - Image To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts, up to 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 16,
    "resolutionField": "resolution"
  },
  {
    "id": "gpt-image-2-5-flare-text-to-image--t2i",
    "slug": "gpt-image-2-5-flare-text-to-image",
    "name": "GPT Image 2.5 Flare Text to Image",
    "family": "gpt-image-2-5-flare-text-to-image",
    "description": "GPT Image 2.5 Flare - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt. Required, maximum 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "gpt-image-2-5-sunburst-image-to-image--t2i",
    "slug": "gpt-image-2-5-sunburst-image-to-image",
    "name": "GPT Image 2.5 Sunburst Image To Image",
    "family": "gpt-image-2-5-sunburst-image-to-image",
    "description": "GPT Image 2.5 Sunburst - Image To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts, up to 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 16,
    "resolutionField": "resolution"
  },
  {
    "id": "gpt-image-2-5-sunburst-text-to-image--t2i",
    "slug": "gpt-image-2-5-sunburst-text-to-image",
    "name": "GPT Image 2.5 Sunburst Text to Image",
    "family": "gpt-image-2-5-sunburst-text-to-image",
    "description": "GPT Image 2.5 Sunburst - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt. Required, maximum 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "gpt-image-1-5-text-to-image--t2i",
    "slug": "gpt-image/1.5-text-to-image",
    "name": "GPT Image-1.5 Text to Image",
    "family": "gpt-image",
    "description": "GPT Image-1.5 - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      }
    },
    "resolutionField": "quality"
  },
  {
    "id": "grok-imagine-image-2-0-text-to-image--t2i",
    "slug": "grok-imagine-image-2-0/text-to-image",
    "name": "Grok Imagine Image 2.0 Text To Image",
    "family": "grok-imagine-image-2-0",
    "description": "Grok Imagine Image 2.0 Text To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired image. This field is required. Up to 8,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "16:9",
          "9:16"
        ],
        "default": "1:1"
      }
    }
  },
  {
    "id": "grok-imagine-text-to-image--t2i",
    "slug": "grok-imagine/text-to-image",
    "name": "Grok Imagine Text to Image",
    "family": "grok-imagine",
    "description": "Grok Imagine - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired image. Required field.\n\n- Should be detailed and specific about the desired visual elements\n- Describe composition, style, lighting, mood, and other visual details\n-"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "2:3",
          "3:2",
          "1:1",
          "16:9",
          "9:16"
        ],
        "default": "2:3"
      }
    }
  },
  {
    "id": "google-imagen4-fast--t2i",
    "slug": "google/imagen4-fast",
    "name": "imagen4-fast",
    "family": "google",
    "description": "Google - imagen4-fast",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing what you want to see (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "auto"
        ],
        "default": "1:1"
      }
    }
  },
  {
    "id": "google-imagen4-ultra--t2i",
    "slug": "google/imagen4-ultra",
    "name": "imagen4-ultra",
    "family": "google",
    "description": "Google - imagen4-ultra",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing what you want to see (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "auto"
        ],
        "default": "1:1"
      }
    }
  },
  {
    "id": "google-nano-banana--t2i",
    "slug": "google/nano-banana",
    "name": "Nano Banana",
    "family": "google",
    "description": "Google - Nano Banana",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt for image generation (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "9:16",
          "16:9",
          "3:4",
          "4:3",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1:1",
          "9:16",
          "16:9",
          "3:4",
          "4:3",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      }
    },
    "resolutionField": "image_size",
    "defaults": {
      "output_format": "png"
    }
  },
  {
    "id": "nano-banana-2-lite--t2i",
    "slug": "nano-banana-2-lite",
    "name": "Nano Banana 2 Lite",
    "family": "nano-banana-2-lite",
    "description": "Google - Nano Banana 2 Lite",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt used to generate the image. Required. Maximum length: 20000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "1:4",
          "1:8",
          "2:3",
          "3:2",
          "3:4",
          "4:1",
          "4:3",
          "4:5",
          "5:4",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10
  },
  {
    "id": "nano-banana-2-1--t2i",
    "slug": "nano-banana-2-1",
    "name": "Nano Banana 2.1",
    "family": "nano-banana-2-1",
    "description": "Google - Nano Banana 2.1",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "1:4",
          "4:1",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "1:8",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_input",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "output_format": "jpg"
    }
  },
  {
    "id": "qwen2-1-text-to-image--t2i",
    "slug": "qwen2-1/text-to-image",
    "name": "Qwen 2.1 Text to Image",
    "family": "qwen2-1",
    "description": "Qwen 2.1 - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt that describes the image content, style and composition you want to generate. Required. Any language is supported, up to 5000 characters; if it is longer, the request is rejected."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "16:9",
          "9:16",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "background": "opaque",
      "output_format": "png",
      "enhance_prompt": true
    }
  },
  {
    "id": "qwen-text-to-image--t2i",
    "slug": "qwen/text-to-image",
    "name": "Qwen Text to Image",
    "family": "qwen",
    "description": "Qwen - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the image with (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_16_9"
        ],
        "default": "square"
      }
    },
    "resolutionField": "image_size",
    "defaults": {
      "num_inference_steps": 30,
      "guidance_scale": 2.5,
      "output_format": "png",
      "acceleration": "none"
    }
  },
  {
    "id": "qwen2-text-to-image--t2i",
    "slug": "qwen2/text-to-image",
    "name": "Qwen2 Text To Image",
    "family": "qwen2",
    "description": "Qwen2 - Text To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the image with. Max length: 5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9"
        ],
        "default": "16:9"
      }
    },
    "resolutionField": "image_size"
  },
  {
    "id": "qwen3-pro-text-to-image--t2i",
    "slug": "qwen3/pro-text-to-image",
    "name": "Qwen3 Pro Text to Image",
    "family": "qwen3",
    "description": "Qwen3 Pro Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The positive prompt that describes the image content, style, and composition you want to generate or edit. Both Chinese and English are supported."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "nsfw_checker": false
    }
  },
  {
    "id": "qwen3-text-to-image--t2i",
    "slug": "qwen3/text-to-image",
    "name": "Qwen3 Text to Image",
    "family": "qwen3",
    "description": "Qwen3 Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The positive prompt that describes the image content, style, and composition you want to generate or edit. Both Chinese and English are supported."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "nsfw_checker": false
    }
  },
  {
    "id": "bytedance-seedream--t2i",
    "slug": "bytedance/seedream",
    "name": "Seedream 3.0 Text to Image",
    "family": "bytedance",
    "description": "Seedream3.0 - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the image (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_16_9"
        ],
        "default": "square_hd"
      }
    },
    "resolutionField": "image_size",
    "defaults": {
      "guidance_scale": 2.5
    }
  },
  {
    "id": "bytedance-seedream-v4-text-to-image--t2i",
    "slug": "bytedance/seedream-v4-text-to-image",
    "name": "Seedream 4.0 Text to Image",
    "family": "bytedance",
    "description": "Seedream4.0 - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the image (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_3_2",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_3_2",
          "landscape_16_9",
          "landscape_21_9"
        ],
        "default": "square_hd"
      }
    },
    "resolutionField": "image_size",
    "defaults": {
      "max_images": 1
    }
  },
  {
    "id": "seedream-4-5-text-to-image--t2i",
    "slug": "seedream/4.5-text-to-image",
    "name": "Seedream 4.5 Text to Image",
    "family": "seedream",
    "description": "Seedream4.5 - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 3000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "basic",
          "high"
        ],
        "default": "basic"
      }
    },
    "resolutionField": "quality"
  },
  {
    "id": "seedream-5-flash-text-to-image--t2i",
    "slug": "seedream/5-flash-text-to-image",
    "name": "Seedream 5.0 Flash Text to Image",
    "family": "seedream",
    "description": "Seedream5.0 Flash - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, 4–5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "1.5K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "resolutionField": "size"
  },
  {
    "id": "seedream-5-lite-text-to-image--t2i",
    "slug": "seedream/5-lite-text-to-image",
    "name": "Seedream 5.0 Lite Text to Image",
    "family": "seedream",
    "description": "Seedream5.0 Lite - Text to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, 4–2995 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "basic",
          "high",
          "ultra"
        ],
        "default": "basic"
      }
    },
    "resolutionField": "quality"
  },
  {
    "id": "wan-2-7-image--t2i",
    "slug": "wan/2-7-image",
    "name": "Wan 2.7 Image",
    "family": "wan",
    "description": "Wan 2.7 Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Prompt for image generation or editing. This field supports both Chinese and English, with a maximum length of 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "4:3",
          "21:9",
          "3:4",
          "9:16",
          "8:1",
          "1:8"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "2K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution",
    "defaults": {
      "enable_sequential": false,
      "thinking_mode": false,
      "watermark": false
    }
  },
  {
    "id": "wan-2-7-image-pro--t2i",
    "slug": "wan/2-7-image-pro",
    "name": "Wan 2.7 Image Pro",
    "family": "wan",
    "description": "Wan 2.7 Image Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Prompt for image generation or editing. This field supports both Chinese and English, with a maximum length of 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "4:3",
          "21:9",
          "3:4",
          "9:16",
          "8:1",
          "1:8"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "2K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution",
    "defaults": {
      "enable_sequential": false,
      "thinking_mode": false,
      "watermark": false
    }
  }
];

export const kieI2I = [
  {
    "id": "nano-banana-pro--i2i",
    "slug": "nano-banana-pro",
    "name": "Nano Banana Pro",
    "family": "nano-banana-pro",
    "description": "Google - Nano Banana Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_input",
    "imageFieldType": "array",
    "maxImages": 8,
    "resolutionField": "resolution"
  },
  {
    "id": "nano-banana-2--i2i",
    "slug": "nano-banana-2",
    "name": "Nano Banana 2",
    "family": "nano-banana-2",
    "description": "Google - Nano Banana 2",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "1:4",
          "4:1",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "1:8",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_input",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "output_format": "jpg"
    }
  },
  {
    "id": "gpt-image-2-image-to-image--i2i",
    "slug": "gpt-image-2-image-to-image",
    "name": "GPT Image 2 Image To Image",
    "family": "gpt-image-2-image-to-image",
    "description": "GPT Image 2 - Image To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts, up to 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "5:4",
          "4:5",
          "16:9",
          "9:16",
          "2:1",
          "1:2",
          "3:1",
          "1:3",
          "21:9",
          "9:21"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 16,
    "resolutionField": "resolution"
  },
  {
    "id": "flux-2-pro-image-to-image--i2i",
    "slug": "flux-2/pro-image-to-image",
    "name": "Flux-2 Pro Image to Image",
    "family": "flux-2",
    "description": "Flux-2 - Pro Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": " Must be between 3 and 5000 characters. (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "3:2",
          "2:3",
          "auto"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 8,
    "resolutionField": "resolution"
  },
  {
    "id": "seedream-5-pro-image-to-image--i2i",
    "slug": "seedream/5-pro-image-to-image",
    "name": "Seedream 5.0 Pro Image to Image",
    "family": "seedream",
    "description": "Seedream5.0 Pro - Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, 4–5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "basic",
          "high"
        ],
        "default": "basic"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "quality",
    "defaults": {
      "output_format": "png"
    }
  },
  {
    "id": "google-nano-banana-edit--i2i",
    "slug": "google/nano-banana-edit",
    "name": "Nano Banana Edit",
    "family": "google",
    "description": "Google - Nano Banana Edit",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt for image editing (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "9:16",
          "16:9",
          "3:4",
          "4:3",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1:1",
          "9:16",
          "16:9",
          "3:4",
          "4:3",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "image_size",
    "defaults": {
      "output_format": "png"
    }
  },
  {
    "id": "qwen-image-edit--i2i",
    "slug": "qwen/image-edit",
    "name": "Qwen Image Edit",
    "family": "qwen",
    "description": "Qwen - Image Edit",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the image with (Max length: 2000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_16_9"
        ],
        "default": "landscape_4_3"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "image_size",
    "defaults": {
      "acceleration": "none",
      "num_inference_steps": 25,
      "guidance_scale": 4,
      "output_format": "png"
    }
  },
  {
    "id": "topaz-image-upscale--i2i",
    "slug": "topaz/image-upscale",
    "name": "Topaz Image Upscale",
    "family": "topaz",
    "description": "Topaz - Image Upscale",
    "hasPrompt": false,
    "requiresPrompt": false,
    "inputs": {},
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "upscale_factor": "2"
    }
  },
  {
    "id": "flux-3-klein-edit-image--i2i",
    "slug": "flux-3/klein-edit-image",
    "name": "FLUX 3 Klein Edit Image",
    "family": "flux-3",
    "description": "FLUX 3 Klein Edit Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "An instruction describing how to edit the image (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "16:9",
          "9:16",
          "21:9",
          "9:21",
          "auto"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "output_format": "png",
      "num_images": 1,
      "enhance_prompt": true
    }
  },
  {
    "id": "flux-2-flex-image-to-image--i2i",
    "slug": "flux-2/flex-image-to-image",
    "name": "Flux-2 Image to Image",
    "family": "flux-2",
    "description": "Flux-2 - Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": " Must be between 3 and 5000 characters. (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "3:2",
          "2:3",
          "auto"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 8,
    "resolutionField": "resolution"
  },
  {
    "id": "4o-image-api--i2i",
    "slug": "4o-image-api",
    "name": "Generate 4o Image",
    "family": "4o-image-api",
    "description": "Generate 4o Image",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "(Optional) Text prompt that conveys the creative idea you want the 4o model to render. Required if neither `files_url` nor `file_url` is supplied. At least one of `prompt` or `files_url` must be provi"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1:1",
          "3:2",
          "2:3"
        ],
        "default": "1:1"
      }
    },
    "imageField": "file_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "size"
  },
  {
    "id": "flux1-kontext--i2i",
    "slug": "flux1-kontext",
    "name": "Generate or Edit Image",
    "family": "flux1-kontext",
    "description": "Generate or Edit Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired image or edit. Required for both generation and editing modes.\n\n- Should be detailed and specific\n- For image editing, describe the desired changes\n- For image gener"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "21:9"
      }
    },
    "imageField": "input_image",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "model": "flux-kontext-pro",
      "output_format": "jpeg",
      "prompt_upsampling": false,
      "safety_tolerance": 2
    }
  },
  {
    "id": "gpt-image-2-5-flare-image-to-image--i2i",
    "slug": "gpt-image-2-5-flare-image-to-image",
    "name": "GPT Image 2.5 Flare Image To Image",
    "family": "gpt-image-2-5-flare-image-to-image",
    "description": "GPT Image 2.5 Flare - Image To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts, up to 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 16,
    "resolutionField": "resolution"
  },
  {
    "id": "gpt-image-2-5-sunburst-image-to-image--i2i",
    "slug": "gpt-image-2-5-sunburst-image-to-image",
    "name": "GPT Image 2.5 Sunburst Image To Image",
    "family": "gpt-image-2-5-sunburst-image-to-image",
    "description": "GPT Image 2.5 Sunburst - Image To Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts, up to 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "3:2",
          "2:3",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "27:16",
          "16:27",
          "9:8",
          "8:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 16,
    "resolutionField": "resolution"
  },
  {
    "id": "gpt-image-1-5-image-to-image--i2i",
    "slug": "gpt-image/1.5-image-to-image",
    "name": "GPT Image-1.5 Image to Image",
    "family": "gpt-image",
    "description": "GPT Image-1.5 - Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 16,
    "resolutionField": "quality"
  },
  {
    "id": "grok-imagine-image-2-0-image-edit--i2i",
    "slug": "grok-imagine-image-2-0/image-edit",
    "name": "Grok Imagine Image 2.0 Image Edit",
    "family": "grok-imagine-image-2-0",
    "description": "Grok Imagine Image 2.0 Image Edit",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description specifying the desired content or style of the generated image. Up to 8,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "16:9",
          "9:16",
          "auto"
        ],
        "default": "1:1"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 5
  },
  {
    "id": "grok-imagine-image-to-image--i2i",
    "slug": "grok-imagine/image-to-image",
    "name": "Grok Imagine image to image",
    "family": "grok-imagine",
    "description": "Grok Imagine - image to image",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description specifying the desired content or style of the generated image. (Max length: 390000 characters)"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 5
  },
  {
    "id": "ideogram-character--i2i",
    "slug": "ideogram/character",
    "name": "Ideogram Character",
    "family": "ideogram",
    "description": "Ideogram - Character",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt describing the scene to generate with the referenced character. (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_16_9"
        ],
        "default": "square_hd"
      }
    },
    "imageField": "reference_image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "image_size",
    "defaults": {
      "rendering_speed": "BALANCED",
      "style": "AUTO",
      "num_images": "1"
    }
  },
  {
    "id": "ideogram-v3-remix--i2i",
    "slug": "ideogram/v3-remix",
    "name": "Ideogram V3 Remix",
    "family": "ideogram",
    "description": "Ideogram V3 Remix",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to remix the image with. Maximum length: 5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_16_9"
        ],
        "default": "square"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "image_size"
  },
  {
    "id": "nano-banana-2-lite--i2i",
    "slug": "nano-banana-2-lite",
    "name": "Nano Banana 2 Lite",
    "family": "nano-banana-2-lite",
    "description": "Google - Nano Banana 2 Lite",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt used to generate the image. Required. Maximum length: 20000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "1:4",
          "1:8",
          "2:3",
          "3:2",
          "3:4",
          "4:1",
          "4:3",
          "4:5",
          "5:4",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "1:1"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10
  },
  {
    "id": "nano-banana-2-1--i2i",
    "slug": "nano-banana-2-1",
    "name": "Nano Banana 2.1",
    "family": "nano-banana-2-1",
    "description": "Google - Nano Banana 2.1",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "1:4",
          "4:1",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "1:8",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_input",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "output_format": "jpg"
    }
  },
  {
    "id": "qwen2-1-image-to-image--i2i",
    "slug": "qwen2-1/image-to-image",
    "name": "Qwen 2.1 Image to Image",
    "family": "qwen2-1",
    "description": "Qwen 2.1 - Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt describing the result you want. Required. Any language is supported, up to 5000 characters; if it is longer, the request is rejected. When `mask_url` is supplied, use it to describe what sh"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "16:9",
          "9:16",
          "21:9",
          "9:21"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "background": "opaque",
      "output_format": "png",
      "enhance_prompt": true
    }
  },
  {
    "id": "qwen-image-to-image--i2i",
    "slug": "qwen/image-to-image",
    "name": "Qwen Image to Image",
    "family": "qwen",
    "description": "Qwen - Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the image with (Max length: 5000 characters)"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "strength": 0.8,
      "output_format": "png",
      "acceleration": "none",
      "num_inference_steps": 30,
      "guidance_scale": 2.5
    }
  },
  {
    "id": "qwen2-image-edit--i2i",
    "slug": "qwen2/image-edit",
    "name": "Qwen2 Image Edit",
    "family": "qwen2",
    "description": "Qwen2 - Image Edit",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The prompt to generate the image with (Max length: 800 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "21:9"
        ],
        "default": "16:9"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "array",
    "maxImages": 3,
    "resolutionField": "image_size"
  },
  {
    "id": "qwen3-image-to-image--i2i",
    "slug": "qwen3/image-to-image",
    "name": "Qwen3 Image to Image",
    "family": "qwen3",
    "description": "Qwen3 Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The positive prompt that describes the image content, style, and composition you want to generate or edit. Both Chinese and English are supported."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 3,
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "nsfw_checker": false
    }
  },
  {
    "id": "qwen3-pro-image-to-image--i2i",
    "slug": "qwen3/pro-image-to-image",
    "name": "Qwen3 Pro Image to Image",
    "family": "qwen3",
    "description": "Qwen3 Pro Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The positive prompt that describes the image content, style, and composition you want to generate or edit. Both Chinese and English are supported."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 3,
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "nsfw_checker": false
    }
  },
  {
    "id": "recraft-crisp-upscale--i2i",
    "slug": "recraft/crisp-upscale",
    "name": "Recraft Crisp Upscale",
    "family": "recraft",
    "description": "Recraft - Crisp Upscale",
    "hasPrompt": false,
    "requiresPrompt": false,
    "inputs": {},
    "imageField": "image",
    "imageFieldType": "string",
    "maxImages": 1
  },
  {
    "id": "recraft-remove-background--i2i",
    "slug": "recraft/remove-background",
    "name": "Recraft Remove Background",
    "family": "recraft",
    "description": "Recraft - Remove Background",
    "hasPrompt": false,
    "requiresPrompt": false,
    "inputs": {},
    "imageField": "image",
    "imageFieldType": "string",
    "maxImages": 1
  },
  {
    "id": "bytedance-seedream-v4-edit--i2i",
    "slug": "bytedance/seedream-v4-edit",
    "name": "Seedream 4.0 Edit",
    "family": "bytedance",
    "description": "Seedream4.0 - Edit",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to edit the image (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "square",
          "square_hd",
          "portrait_4_3",
          "portrait_3_2",
          "portrait_16_9",
          "landscape_4_3",
          "landscape_3_2",
          "landscape_16_9",
          "landscape_21_9"
        ],
        "default": "square_hd"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "image_size",
    "defaults": {
      "max_images": 1
    }
  },
  {
    "id": "seedream-4-5-edit--i2i",
    "slug": "seedream/4.5-edit",
    "name": "Seedream 4.5 Edit",
    "family": "seedream",
    "description": "Seedream4.5 - Edit",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A text description of the image you want to generate (Max length: 3000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "basic",
          "high"
        ],
        "default": "basic"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 14,
    "resolutionField": "quality"
  },
  {
    "id": "seedream-5-flash-image-to-image--i2i",
    "slug": "seedream/5-flash-image-to-image",
    "name": "Seedream 5.0 Flash Image to Image",
    "family": "seedream",
    "description": "Seedream5.0 Flash - Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, 4–5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "1.5K",
          "2K"
        ],
        "default": "1K"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "size"
  },
  {
    "id": "seedream-5-flash-layer-decomposition--i2i",
    "slug": "seedream/5-flash-layer-decomposition",
    "name": "Seedream 5.0 Flash Layer Decomposition",
    "family": "seedream",
    "description": "Seedream5.0 Flash -  Layer Decomposition",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional prompt for layer separation.\n\n- When a prompt is provided, the model separates the specified elements based on the prompt\n- When no prompt is provided, the model automatically identifies the "
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "auto",
          "1K",
          "1.5K",
          "2K"
        ],
        "default": "auto"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "size",
    "defaults": {
      "output_format": "jpeg"
    }
  },
  {
    "id": "seedream-5-lite-image-to-image--i2i",
    "slug": "seedream/5-lite-image-to-image",
    "name": "Seedream 5.0 Lite Image to Image",
    "family": "seedream",
    "description": "Seedream5.0 Lite - Image to Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, 4–2995 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "basic",
          "high",
          "ultra"
        ],
        "default": "basic"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 14,
    "resolutionField": "quality"
  },
  {
    "id": "seedream-5-pro-layer-decomposition--i2i",
    "slug": "seedream/5-pro-layer-decomposition",
    "name": "Seedream 5.0 Pro Layer Decomposition",
    "family": "seedream",
    "description": "Seedream5.0 Pro -  Layer Decomposition",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional prompt for layer separation.\n\n- When a prompt is provided, the model separates the specified elements based on the prompt\n- When no prompt is provided, the model automatically identifies the "
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "auto",
          "1K",
          "1.5K",
          "2K"
        ],
        "default": "auto"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "size",
    "defaults": {
      "output_format": "jpeg"
    }
  },
  {
    "id": "wan-2-7-image--i2i",
    "slug": "wan/2-7-image",
    "name": "Wan 2.7 Image",
    "family": "wan",
    "description": "Wan 2.7 Image",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Prompt for image generation or editing. This field supports both Chinese and English, with a maximum length of 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "4:3",
          "21:9",
          "3:4",
          "9:16",
          "8:1",
          "1:8"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K"
        ],
        "default": "2K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution",
    "defaults": {
      "enable_sequential": false,
      "thinking_mode": false,
      "watermark": false
    }
  },
  {
    "id": "wan-2-7-image-pro--i2i",
    "slug": "wan/2-7-image-pro",
    "name": "Wan 2.7 Image Pro",
    "family": "wan",
    "description": "Wan 2.7 Image Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Prompt for image generation or editing. This field supports both Chinese and English, with a maximum length of 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "4:3",
          "21:9",
          "3:4",
          "9:16",
          "8:1",
          "1:8"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "2K"
      }
    },
    "imageField": "input_urls",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution",
    "defaults": {
      "enable_sequential": false,
      "thinking_mode": false,
      "watermark": false
    }
  }
];

export const kieT2V = [
  {
    "id": "bytedance-seedance-2--t2v",
    "slug": "bytedance/seedance-2",
    "name": "Seedance 2.0",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.0",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video. Required field. (Min length: 3, Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "return_last_frame": false,
      "generate_audio": true
    }
  },
  {
    "id": "kling-3-0-video--t2v",
    "slug": "kling-3.0/video",
    "name": "Kling 3.0",
    "family": "kling-3.0",
    "description": "Kling 3.0",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Required when multi_shots is false. Up to 2,500 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "default": "3"
      },
      "mode": {
        "type": "string",
        "title": "Mode",
        "name": "mode",
        "enum": [
          "std",
          "pro",
          "4K"
        ],
        "default": "std"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "defaults": {
      "sound": false,
      "multi_shots": false
    }
  },
  {
    "id": "veo-3-1--t2v",
    "slug": "veo-3-1",
    "name": "Generate Veo3.1 Video",
    "family": "veo-3-1",
    "description": "Generate Veo3.1 Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content. Required for all generation modes.\n\n- Should be detailed and specific in describing video content\n- Can include actions, scenes, style and other infor"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "Auto"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          4,
          6,
          8
        ],
        "default": 8
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "model": "veo3_fast",
      "enable_fallback": false
    }
  },
  {
    "id": "wan-3-0-video--t2v",
    "slug": "wan/3-0-video",
    "name": "Wan 3.0 Video",
    "family": "wan",
    "description": "Wan 3.0 - Video",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, supporting both Chinese and English. Up to 20,000 characters. Required for text-to-video generation; for other modes, it is recommended to provide it together with media. In reference mod"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480P",
          "720P",
          "1080P"
        ],
        "default": "1080P"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "audio": true
    }
  },
  {
    "id": "kling-v2-1-master-text-to-video--t2v",
    "slug": "kling/v2-1-master-text-to-video",
    "name": "Kling V2.1 Master Text to Video",
    "family": "kling",
    "description": "Kling V2.1 Master Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing the video you want to generate (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "defaults": {
      "cfg_scale": 0.5
    }
  },
  {
    "id": "minimax-h3-text-to-video--t2v",
    "slug": "minimax-h3/text-to-video",
    "name": "MiniMax H3 Text-to-Video",
    "family": "minimax-h3",
    "description": "MiniMax H3 Text-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video generation prompt, length is between 1 and 7000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "21:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "768P",
          "2K"
        ],
        "default": "2K"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 6
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "pixverse-v6-text-to-video--t2v",
    "slug": "pixverse-v6/text-to-video",
    "name": "PixVerse V6 Text-to-Video",
    "family": "pixverse-v6",
    "description": "PixVerse V6 Text-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Generate prompt, cannot be empty, length is limited to 3-5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "360p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 1
      }
    },
    "resolutionField": "quality",
    "defaults": {
      "generate_audio_switch": false,
      "generate_multi_clip_switch": false
    }
  },
  {
    "id": "google-gemini-omni-flash-1-1--t2v",
    "slug": "google/gemini-omni-flash-1-1",
    "name": "Gemini Omni 1.1 Flash",
    "family": "google",
    "description": "Gemini Omni 1.1 Flash",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The video prompt, used to describe the visual content, style, cinematography, or character actions of the target video."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "360p",
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "4",
          "6",
          "8",
          "10"
        ],
        "default": "4"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution"
  },
  {
    "id": "gemini-omni-video--t2v",
    "slug": "gemini-omni-video",
    "name": "Gemini Omni Video",
    "family": "gemini-omni-video",
    "description": "Gemini Omni Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video prompt used to describe the target content, style, camera language, or character actions in the generated video."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "4",
          "6",
          "8",
          "10"
        ],
        "default": "4"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution"
  },
  {
    "id": "grok-imagine-image-to-video--t2v",
    "slug": "grok-imagine/image-to-video",
    "name": "Grok Imagine Image to Video",
    "family": "grok-imagine",
    "description": "Grok Imagine Image to Video",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video motion. Optional field.\n\n- Should be detailed and specific about the desired visual motion\n- Describe movement, action sequences, camera work, and timing\n- Inc"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "2:3",
          "3:2",
          "1:1",
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "mode": {
        "type": "string",
        "title": "Mode",
        "name": "mode",
        "enum": [
          "fun",
          "normal",
          "spicy"
        ],
        "default": "normal"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 7,
    "resolutionField": "resolution",
    "defaults": {
      "index": 0
    }
  },
  {
    "id": "grok-imagine-text-to-video--t2v",
    "slug": "grok-imagine/text-to-video",
    "name": "Grok Imagine Text to Video",
    "family": "grok-imagine",
    "description": "Grok Imagine Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video motion. Required field.\n\n- Should be detailed and specific about the desired visual motion\n- Describe movement, action sequences, camera work, and timing\n- Inc"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "2:3",
          "3:2",
          "1:1",
          "16:9",
          "9:16"
        ],
        "default": "2:3"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "mode": {
        "type": "string",
        "title": "Mode",
        "name": "mode",
        "enum": [
          "fun",
          "normal",
          "spicy"
        ],
        "default": "normal"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "hailuo-02-text-to-video-pro--t2v",
    "slug": "hailuo/02-text-to-video-pro",
    "name": "Hailuo Pro Text to Video",
    "family": "hailuo",
    "description": "Hailuo Pro Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt for video generation (Max length: 1500 characters)"
      }
    }
  },
  {
    "id": "hailuo-02-text-to-video-standard--t2v",
    "slug": "hailuo/02-text-to-video-standard",
    "name": "Hailuo Standard Text to Video",
    "family": "hailuo",
    "description": "Hailuo Standard Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description for video generation (Max length: 1500 characters)"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "6",
          "10"
        ],
        "default": "6"
      }
    }
  },
  {
    "id": "happyhorse-text-to-video--t2v",
    "slug": "happyhorse/text-to-video",
    "name": "HappyHorse text-to-video",
    "family": "happyhorse",
    "description": "HappyHorse - text-to-video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video to generate (any language). Up to 5,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "seed": 0
    }
  },
  {
    "id": "happyhorse-1-1-text-to-video--t2v",
    "slug": "happyhorse-1-1/text-to-video",
    "name": "HappyHorse-1-1 text-to-video",
    "family": "happyhorse-1-1",
    "description": "HappyHorse-1-1 text-to-video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video to generate.  Supports any language. Maximum 5,000 non-Chinese characters or 2,500 Chinese"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "4:5",
          "5:4",
          "9:21",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "kling-2-6-text-to-video--t2v",
    "slug": "kling-2.6/text-to-video",
    "name": "Kling 2.6 Text to Video",
    "family": "kling-2.6",
    "description": "Kling 2.6 Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt (max 2,500 characters)."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "9:16"
        ],
        "default": "1:1"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "defaults": {
      "sound": false
    }
  },
  {
    "id": "kling-3-0-omni-text-to-video--t2v",
    "slug": "kling-3.0-omni/text-to-video",
    "name": "Kling 3.0 Omni Text to Video",
    "family": "kling-3.0-omni",
    "description": "Kling 3.0 Omni Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video. It must not be empty after leading and trailing whitespace is removed, and must not exceed 3,072 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "customize_multi_shots": false,
      "multi_prompt": [],
      "elements": [],
      "audio": false
    }
  },
  {
    "id": "kling-3-0-omni-transformation--t2v",
    "slug": "kling-3.0-omni/transformation",
    "name": "Kling 3.0 Omni Transformation",
    "family": "kling-3.0-omni",
    "description": "Kling 3.0 Omni Transformation",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. It must not be empty after leading and trailing whitespace is removed. Maximum length: 3,072 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "auto"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 4,
    "resolutionField": "resolution",
    "defaults": {
      "elements": []
    }
  },
  {
    "id": "kling-4-0-keyframe-to-video--t2v",
    "slug": "kling-4.0/keyframe-to-video",
    "name": "Kling 4.0 Keyframe To Video",
    "family": "kling-4.0",
    "description": "Kling 4.0 Keyframe To Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Required. Maximum 8000 characters.\n\nUse `@first_frame`, `@keyframe_1`, `@keyframe_2`, …, `@last_frame` to mention frames that you uploaded in this request. You can only mention fram"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "21:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30
        ],
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "keyframe_urls": []
    }
  },
  {
    "id": "kling-4-0-reference-to-video--t2v",
    "slug": "kling-4.0/reference-to-video",
    "name": "Kling 4.0 Reference To Video",
    "family": "kling-4.0",
    "description": "Kling 4.0 Reference To Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Required. Maximum 8000 characters.\n\nUse `@` to mention assets uploaded in this request:\n- `@image_1`, `@image_2`, … map to `image_urls` in order (1-based)\n- `@video_1`, `@video_2`, "
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "21:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30
        ],
        "default": 5
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "video_urls": [],
      "keep_original_sound": false,
      "elements": [],
      "voices": []
    }
  },
  {
    "id": "kling-v2-5-turbo-text-to-video-pro--t2v",
    "slug": "kling/v2-5-turbo-text-to-video-pro",
    "name": "Kling V2.5 Turbo Text to Video Pro",
    "family": "kling",
    "description": "Kling - V2.5 Turbo Text to Video Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text description of the video you want to generate (Max length: 2500 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "defaults": {
      "cfg_scale": 0.5
    }
  },
  {
    "id": "kling-v3-turbo-text-to-video--t2v",
    "slug": "kling/v3-turbo-text-to-video",
    "name": "Kling V3 Turbo Text to Video",
    "family": "kling",
    "description": "Kling - V3 Turbo Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text description of the video you want to generate (Max length: 2500 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "9:16",
          "16:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "minimax-h3-image-to-video--t2v",
    "slug": "minimax-h3/image-to-video",
    "name": "MiniMax H3 Image-to-Video",
    "family": "minimax-h3",
    "description": "MiniMax H3 Image-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video generation prompt, length is between 1 and 7000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "768P",
          "2K"
        ],
        "default": "2K"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 6
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "minimax-h3-reference-to-video--t2v",
    "slug": "minimax-h3/reference-to-video",
    "name": "MiniMax H3 Reference-to-Video",
    "family": "minimax-h3",
    "description": "MiniMax H3 Reference-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video generation prompt, length is between 1 and 7000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "768P",
          "2K"
        ],
        "default": "2K"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 6
      }
    },
    "imageField": "reference_image_urls",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution"
  },
  {
    "id": "pixverse-v6-max-text-to-video--t2v",
    "slug": "pixverse-v6-max/text-to-video",
    "name": "PixVerse V6 Max Text-to-Video",
    "family": "pixverse-v6-max",
    "description": "PixVerse V6 Max Text-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Generation prompt. Required. Cannot be empty. Maximum 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "360p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 1
      }
    },
    "resolutionField": "quality",
    "defaults": {
      "generate_audio_switch": false
    }
  },
  {
    "id": "runway--t2v",
    "slug": "runway",
    "name": "Runway Gen-4",
    "family": "runway",
    "description": "Generate AI Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Descriptive text that guides the AI video generation. Be specific about subject, action, style, and setting. When used with an image, describes how to animate or modify the image content. Maximum leng"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1
  },
  {
    "id": "bytedance-seedance-2-fast--t2v",
    "slug": "bytedance/seedance-2-fast",
    "name": "Seedance 2.0 Fast",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.0 Fast",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video. Required field. (Min length: 3, Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "return_last_frame": false,
      "generate_audio": true
    }
  },
  {
    "id": "bytedance-seedance-2-mini--t2v",
    "slug": "bytedance/seedance-2-mini",
    "name": "Seedance 2.0 Mini",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.0 Mini",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video. Required field. (Min length: 3, Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "generate_audio": true
    }
  },
  {
    "id": "bytedance-seedance-2-5--t2v",
    "slug": "bytedance/seedance-2-5",
    "name": "Seedance 2.5",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.5",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video.. ( Max length: 20480 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "return_last_frame": false,
      "generate_audio": true,
      "output_format": "mp4",
      "draft": false
    }
  },
  {
    "id": "bytedance-v1-lite-text-to-video--t2v",
    "slug": "bytedance/v1-lite-text-to-video",
    "name": "V1 Lite Text to Video",
    "family": "bytedance",
    "description": "Bytedance - V1 Lite Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video (Max length: 10000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "9:21"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "bytedance-v1-pro-text-to-video--t2v",
    "slug": "bytedance/v1-pro-text-to-video",
    "name": "V1 Pro Text to Video",
    "family": "bytedance",
    "description": "Bytedance - V1 Pro Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video (Max length: 10000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "seed": -1
    }
  },
  {
    "id": "wan-2-2-a14b-text-to-video-turbo--t2v",
    "slug": "wan/2-2-a14b-text-to-video-turbo",
    "name": "Wan 2.2 A14B Text to Video Turbo",
    "family": "wan",
    "description": "Wan - 2.2 A14B Text to Video Turbo",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt to guide video generation. (Max length: 5000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "720p"
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "acceleration": "none"
    }
  },
  {
    "id": "wan-2-5-text-to-video--t2v",
    "slug": "wan/2-5-text-to-video",
    "name": "Wan 2.5 Text to Video",
    "family": "wan",
    "description": "Wan 2.5 - Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt for video generation. Supports Chinese and English. Maximum length: 800 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "resolutionField": "resolution"
  },
  {
    "id": "wan-2-6-text-to-video--t2v",
    "slug": "wan/2-6-text-to-video",
    "name": "Wan 2.6 Text to Video",
    "family": "wan",
    "description": "Wan 2.6 - Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts for video generation. Supports both Chinese and English, with a minimum of 1 characters and a maximum of 5,000 characters. (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10",
          "15"
        ],
        "default": "5"
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "multi_shots": false
    }
  },
  {
    "id": "wan-2-7-image-to-video--t2v",
    "slug": "wan/2-7-image-to-video",
    "name": "Wan 2.7 Image to Video",
    "family": "wan",
    "description": "Wan 2.7 - Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Positive prompt. Maximum length: 5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "watermark": false
    }
  },
  {
    "id": "wan-2-7-r2v--t2v",
    "slug": "wan/2-7-r2v",
    "name": "Wan 2.7 Reference to Video",
    "family": "wan",
    "description": "Wan 2.7 - Reference to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt. Required. Describes the desired elements and visual features in the generated video. Supports Chinese and English. Maximum length: 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "default": 5
      }
    },
    "imageField": "reference_image",
    "imageFieldType": "array",
    "maxImages": 5,
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "watermark": false
    }
  },
  {
    "id": "wan-2-7-text-to-video--t2v",
    "slug": "wan/2-7-text-to-video",
    "name": "Wan 2.7 Text to Video",
    "family": "wan",
    "description": "Wan 2.7 - Text to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Positive prompt. Minimum length: 1 character. Maximum length: 5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "resolutionField": "resolution",
    "defaults": {
      "ratio": "16:9",
      "prompt_extend": true,
      "watermark": false
    }
  },
  {
    "id": "wan-3-0-video-prime--t2v",
    "slug": "wan/3-0-video-prime",
    "name": "Wan 3.0 Video Prime",
    "family": "wan",
    "description": "Wan 3.0 - Video Prime",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt. Chinese and English are supported. Up to 20,000 characters. Required for text-to-video; for other modes, it is recommended to provide it together with media. In reference mode, use Image1"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480P",
          "720P",
          "1080P"
        ],
        "default": "1080P"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "audio": true
    }
  }
];

export const kieI2V = [
  {
    "id": "bytedance-seedance-2--i2v",
    "slug": "bytedance/seedance-2",
    "name": "Seedance 2.0",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.0",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video. Required field. (Min length: 3, Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "return_last_frame": false,
      "generate_audio": true
    }
  },
  {
    "id": "kling-v2-1-pro--i2v",
    "slug": "kling/v2-1-pro",
    "name": "Kling V2.1 Pro",
    "family": "kling",
    "description": "Kling V2.1 Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video to generate (Max length: 5000 characters)"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "cfg_scale": 0.5
    }
  },
  {
    "id": "veo-3-1--i2v",
    "slug": "veo-3-1",
    "name": "Generate Veo3.1 Video",
    "family": "veo-3-1",
    "description": "Generate Veo3.1 Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content. Required for all generation modes.\n\n- Should be detailed and specific in describing video content\n- Can include actions, scenes, style and other infor"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "Auto"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          4,
          6,
          8
        ],
        "default": 8
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "model": "veo3_fast",
      "enable_fallback": false
    }
  },
  {
    "id": "wan-3-0-video--i2v",
    "slug": "wan/3-0-video",
    "name": "Wan 3.0 Video",
    "family": "wan",
    "description": "Wan 3.0 - Video",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt, supporting both Chinese and English. Up to 20,000 characters. Required for text-to-video generation; for other modes, it is recommended to provide it together with media. In reference mod"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480P",
          "720P",
          "1080P"
        ],
        "default": "1080P"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "audio": true
    }
  },
  {
    "id": "minimax-h3-image-to-video--i2v",
    "slug": "minimax-h3/image-to-video",
    "name": "MiniMax H3 Image-to-Video",
    "family": "minimax-h3",
    "description": "MiniMax H3 Image-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video generation prompt, length is between 1 and 7000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "768P",
          "2K"
        ],
        "default": "2K"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 6
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "pixverse-v6-image-to-video--i2v",
    "slug": "pixverse-v6/image-to-video",
    "name": "PixVerse V6 Image-to-Video",
    "family": "pixverse-v6",
    "description": "PixVerse V6 Image-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Generate prompt, cannot be empty, length is limited to 3-5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "360p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 1
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 2,
    "resolutionField": "quality",
    "defaults": {
      "generate_audio_switch": false,
      "generate_multi_clip_switch": false
    }
  },
  {
    "id": "hailuo-2-3-image-to-video-pro--i2v",
    "slug": "hailuo/2-3-image-to-video-pro",
    "name": "Hailuo 2.3 Pro Image to Video",
    "family": "hailuo",
    "description": "Hailuo 2.3 Pro Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video animation (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "768P",
          "1080P"
        ],
        "default": "768P"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "6",
          "10"
        ],
        "default": "6"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "kling-4-0-keyframe-to-video--i2v",
    "slug": "kling-4.0/keyframe-to-video",
    "name": "Kling 4.0 Keyframe To Video",
    "family": "kling-4.0",
    "description": "Kling 4.0 Keyframe To Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Required. Maximum 8000 characters.\n\nUse `@first_frame`, `@keyframe_1`, `@keyframe_2`, …, `@last_frame` to mention frames that you uploaded in this request. You can only mention fram"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "21:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30
        ],
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "keyframe_urls": []
    }
  },
  {
    "id": "google-gemini-omni-flash-1-1--i2v",
    "slug": "google/gemini-omni-flash-1-1",
    "name": "Gemini Omni 1.1 Flash",
    "family": "google",
    "description": "Gemini Omni 1.1 Flash",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The video prompt, used to describe the visual content, style, cinematography, or character actions of the target video."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "360p",
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "4",
          "6",
          "8",
          "10"
        ],
        "default": "4"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution"
  },
  {
    "id": "gemini-omni-video--i2v",
    "slug": "gemini-omni-video",
    "name": "Gemini Omni Video",
    "family": "gemini-omni-video",
    "description": "Gemini Omni Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video prompt used to describe the target content, style, camera language, or character actions in the generated video."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "4",
          "6",
          "8",
          "10"
        ],
        "default": "4"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution"
  },
  {
    "id": "grok-imagine-image-to-video--i2v",
    "slug": "grok-imagine/image-to-video",
    "name": "Grok Imagine Image to Video",
    "family": "grok-imagine",
    "description": "Grok Imagine Image to Video",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video motion. Optional field.\n\n- Should be detailed and specific about the desired visual motion\n- Describe movement, action sequences, camera work, and timing\n- Inc"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "2:3",
          "3:2",
          "1:1",
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "mode": {
        "type": "string",
        "title": "Mode",
        "name": "mode",
        "enum": [
          "fun",
          "normal",
          "spicy"
        ],
        "default": "normal"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 7,
    "resolutionField": "resolution",
    "defaults": {
      "index": 0
    }
  },
  {
    "id": "grok-imagine-video-1-5-preview--i2v",
    "slug": "grok-imagine-video-1-5-preview",
    "name": "Grok Imagine Video 1.5 Preview",
    "family": "grok-imagine-video-1-5-preview",
    "description": "Grok Imagine Video 1.5 Preview",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Prompt for video generation. Maximum length: 4096 characters.  Use `@imageN` in the prompt to reference an image from `image_urls`, where N is the 1-based index of the image. For example, `@image1` re"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "auto"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 8
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "hailuo-2-3-image-to-video-standard--i2v",
    "slug": "hailuo/2-3-image-to-video-standard",
    "name": "Hailuo 2.3 Standard Image to Video",
    "family": "hailuo",
    "description": "Hailuo 2.3 Standard Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video animation (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "768P",
          "1080P"
        ],
        "default": "768P"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "6",
          "10"
        ],
        "default": "6"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "hailuo-02-image-to-video-pro--i2v",
    "slug": "hailuo/02-image-to-video-pro",
    "name": "Hailuo Pro Image to Video",
    "family": "hailuo",
    "description": "Hailuo Pro Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video animation (Max length: 1500 characters)"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1
  },
  {
    "id": "hailuo-02-image-to-video-standard--i2v",
    "slug": "hailuo/02-image-to-video-standard",
    "name": "Hailuo Standard Image to Video",
    "family": "hailuo",
    "description": "Hailuo Standard Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing the video to generate (Max length: 1500 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "512P",
          "768P"
        ],
        "default": "512P"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "6",
          "10"
        ],
        "default": "6"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "happyhorse-image-to-video--i2v",
    "slug": "happyhorse/image-to-video",
    "name": "HappyHorse image-to-video",
    "family": "happyhorse",
    "description": "HappyHorse - image-to-video",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video to generate (any language). Up to 5,000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "seed": 0
    }
  },
  {
    "id": "happyhorse-reference-to-video--i2v",
    "slug": "happyhorse/reference-to-video",
    "name": "HappyHorse reference-to-video",
    "family": "happyhorse",
    "description": "HappyHorse - reference-to-video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the video to generate (any language). Up to 5,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "imageField": "reference_image",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution",
    "defaults": {
      "seed": 0
    }
  },
  {
    "id": "happyhorse-1-1-image-to-video--i2v",
    "slug": "happyhorse-1-1/image-to-video",
    "name": "HappyHorse-1-1 image-to-video",
    "family": "happyhorse-1-1",
    "description": "HappyHorse-1-1 image-to-video",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describes the video content to generate. Supports any language. Maximum: 5,000 non-Chinese characters or 2,500 Chinese"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "happyhorse-1-1-reference-to-video--i2v",
    "slug": "happyhorse-1-1/reference-to-video",
    "name": "HappyHorse-1-1 reference-to-video",
    "family": "happyhorse-1-1",
    "description": "HappyHorse-1-1 reference-to-video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "A description of the desired elements and visual style for the generated video.  Input in any language is supported. Up to 5,000 characters.  Use \"[Image 1]\", \"[Image 2]\" to refer to the images in ref"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "1:1",
          "9:21",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "imageField": "reference_image",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution"
  },
  {
    "id": "kling-2-6-image-to-video--i2v",
    "slug": "kling-2.6/image-to-video",
    "name": "Kling 2.6 Image to Video",
    "family": "kling-2.6",
    "description": "Kling 2.6 Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt (max 2,500 characters)."
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "defaults": {
      "sound": false
    }
  },
  {
    "id": "kling-3-0-video--i2v",
    "slug": "kling-3.0/video",
    "name": "Kling 3.0",
    "family": "kling-3.0",
    "description": "Kling 3.0",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Required when multi_shots is false. Up to 2,500 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "default": "3"
      },
      "mode": {
        "type": "string",
        "title": "Mode",
        "name": "mode",
        "enum": [
          "std",
          "pro",
          "4K"
        ],
        "default": "std"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "defaults": {
      "sound": false,
      "multi_shots": false
    }
  },
  {
    "id": "kling-3-0-omni-transformation--i2v",
    "slug": "kling-3.0-omni/transformation",
    "name": "Kling 3.0 Omni Transformation",
    "family": "kling-3.0-omni",
    "description": "Kling 3.0 Omni Transformation",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. It must not be empty after leading and trailing whitespace is removed. Maximum length: 3,072 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "auto"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "default": "720p"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 4,
    "resolutionField": "resolution",
    "defaults": {
      "elements": []
    }
  },
  {
    "id": "kling-4-0-reference-to-video--i2v",
    "slug": "kling-4.0/reference-to-video",
    "name": "Kling 4.0 Reference To Video",
    "family": "kling-4.0",
    "description": "Kling 4.0 Reference To Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video description. Required. Maximum 8000 characters.\n\nUse `@` to mention assets uploaded in this request:\n- `@image_1`, `@image_2`, … map to `image_urls` in order (1-based)\n- `@video_1`, `@video_2`, "
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "21:9"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30
        ],
        "default": 5
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "resolutionField": "resolution",
    "defaults": {
      "video_urls": [],
      "keep_original_sound": false,
      "elements": [],
      "voices": []
    }
  },
  {
    "id": "kling-v2-1-master-image-to-video--i2v",
    "slug": "kling/v2-1-master-image-to-video",
    "name": "Kling V2.1 Master Image to Video",
    "family": "kling",
    "description": "Kling V2.1 Master Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing the video to generate (Max length: 5000 characters)"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "cfg_scale": 0.5
    }
  },
  {
    "id": "kling-v2-1-standard--i2v",
    "slug": "kling/v2-1-standard",
    "name": "Kling V2.1 Standard",
    "family": "kling",
    "description": "Kling V2.1 Standard",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt describing the desired video content (Max length: 5000 characters)"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "cfg_scale": 0.5
    }
  },
  {
    "id": "kling-v2-5-turbo-image-to-video-pro--i2v",
    "slug": "kling/v2-5-turbo-image-to-video-pro",
    "name": "Kling V2.5 Turbo Image to Video Pro",
    "family": "kling",
    "description": "Kling - V2.5 Turbo Image to Video Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing the video to generate (Max length: 2500 characters)"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "defaults": {
      "cfg_scale": 0.5
    }
  },
  {
    "id": "kling-v3-turbo-image-to-video--i2v",
    "slug": "kling/v3-turbo-image-to-video",
    "name": "Kling V3 Turbo Image to Video",
    "family": "kling",
    "description": "Kling - V3 Turbo Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing the video to generate (Max length: 2500 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "minimax-h3-reference-to-video--i2v",
    "slug": "minimax-h3/reference-to-video",
    "name": "MiniMax H3 Reference-to-Video",
    "family": "minimax-h3",
    "description": "MiniMax H3 Reference-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Video generation prompt, length is between 1 and 7000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "768P",
          "2K"
        ],
        "default": "2K"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 6
      }
    },
    "imageField": "reference_image_urls",
    "imageFieldType": "array",
    "maxImages": 9,
    "resolutionField": "resolution"
  },
  {
    "id": "pixverse-v6-reference-to-video--i2v",
    "slug": "pixverse-v6/reference-to-video",
    "name": "PixVerse V6 Fusion / Reference-to-Video",
    "family": "pixverse-v6",
    "description": "PixVerse V6 Fusion / Reference-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Generate prompt, cannot be empty, length is limited to 3-5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "360p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 1
      }
    },
    "imageField": "image_references",
    "imageFieldType": "array",
    "maxImages": 7,
    "resolutionField": "quality",
    "defaults": {
      "generate_audio_switch": false
    }
  },
  {
    "id": "pixverse-v6-max-image-to-video--i2v",
    "slug": "pixverse-v6-max/image-to-video",
    "name": "PixVerse V6 Max Image-to-Video",
    "family": "pixverse-v6-max",
    "description": "PixVerse V6 Max Image-to-Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Generation prompt. Required. Cannot be empty. Maximum 5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "360p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 1
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "quality",
    "defaults": {
      "generate_audio_switch": false
    }
  },
  {
    "id": "runway--i2v",
    "slug": "runway",
    "name": "Runway Gen-4",
    "family": "runway",
    "description": "Generate AI Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Descriptive text that guides the AI video generation. Be specific about subject, action, style, and setting. When used with an image, describes how to animate or modify the image content. Maximum leng"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1
  },
  {
    "id": "bytedance-seedance-2-fast--i2v",
    "slug": "bytedance/seedance-2-fast",
    "name": "Seedance 2.0 Fast",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.0 Fast",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video. Required field. (Min length: 3, Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "return_last_frame": false,
      "generate_audio": true
    }
  },
  {
    "id": "bytedance-seedance-2-mini--i2v",
    "slug": "bytedance/seedance-2-mini",
    "name": "Seedance 2.0 Mini",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.0 Mini",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video. Required field. (Min length: 3, Max length: 20000 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "generate_audio": true
    }
  },
  {
    "id": "bytedance-seedance-2-5--i2v",
    "slug": "bytedance/seedance-2-5",
    "name": "Seedance 2.5",
    "family": "bytedance",
    "description": "Bytedance Seedance 2.5",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video.. ( Max length: 20480 characters)"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "adaptive"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "return_last_frame": false,
      "generate_audio": true,
      "output_format": "mp4",
      "draft": false
    }
  },
  {
    "id": "bytedance-v1-lite-image-to-video--i2v",
    "slug": "bytedance/v1-lite-image-to-video",
    "name": "V1 Lite Image to Video",
    "family": "bytedance",
    "description": "Bytedance - V1 Lite Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video (Max length: 10000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "seed": -1
    }
  },
  {
    "id": "bytedance-v1-pro-fast-image-to-video--i2v",
    "slug": "bytedance/v1-pro-fast-image-to-video",
    "name": "V1 Pro Fast Image to Video",
    "family": "bytedance",
    "description": "Bytedance V1 Pro Fast Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video (Max length: 10000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "bytedance-v1-pro-image-to-video--i2v",
    "slug": "bytedance/v1-pro-image-to-video",
    "name": "V1 Pro Image to Video",
    "family": "bytedance",
    "description": "Bytedance V1 Pro Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used to generate the video (Max length: 10000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "seed": -1
    }
  },
  {
    "id": "vidu-q4-image-to-video--i2v",
    "slug": "vidu-q4/image-to-video",
    "name": "Vidu Q4 Image To Video",
    "family": "vidu-q4",
    "description": "Vidu Q4 Image To Video",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the motion and scene. Optional. Up to 20,000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "540p",
          "720p",
          "1080p",
          "2k",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16
        ],
        "default": 5
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "audio": true
    }
  },
  {
    "id": "vidu-q4-reference-to-video--i2v",
    "slug": "vidu-q4/reference-to-video",
    "name": "Vidu Q4 Reference To Video",
    "family": "vidu-q4",
    "description": "Vidu Q4 Reference To Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text description of the video. Refer to inputs by order, e.g. \"the man in reference image 2 says ... using reference audio 1\". Up to 20,000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "540p",
          "720p",
          "1080p",
          "2k",
          "4k"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16
        ],
        "default": 5
      }
    },
    "imageField": "reference_image_urls",
    "imageFieldType": "array",
    "maxImages": 15,
    "resolutionField": "resolution",
    "defaults": {
      "audio": true
    }
  },
  {
    "id": "wan-2-2-a14b-image-to-video-turbo--i2v",
    "slug": "wan/2-2-a14b-image-to-video-turbo",
    "name": "Wan 2.2 A14B Image to Video Turbo",
    "family": "wan",
    "description": "Wan - 2.2 A14B Image to Video Turbo",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt to guide video generation. (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "720p"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "acceleration": "none"
    }
  },
  {
    "id": "wan-2-5-image-to-video--i2v",
    "slug": "wan/2-5-image-to-video",
    "name": "Wan 2.5 Image to Video",
    "family": "wan",
    "description": "Wan 2.5 - Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt describing the desired video motion. Maximum length: 800 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution"
  },
  {
    "id": "wan-2-6-image-to-video--i2v",
    "slug": "wan/2-6-image-to-video",
    "name": "Wan 2.6 Image to Video",
    "family": "wan",
    "description": "Wan 2.6 - Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts for video generation. Supports both Chinese and English, with a minimum of 2 characters and a maximum of 5,000 characters. (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10",
          "15"
        ],
        "default": "5"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "multi_shots": false
    }
  },
  {
    "id": "wan-2-6-flash-image-to-video--i2v",
    "slug": "wan/2-6-flash-image-to-video",
    "name": "Wan 2.6-flash-image-to-video",
    "family": "wan",
    "description": "Wan - 2.6-flash-image-to-video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts for video generation. Supports Chinese and English, 2–1,500 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10",
          "15"
        ],
        "default": "5"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "audio": false
    }
  },
  {
    "id": "wan-2-7-image-to-video--i2v",
    "slug": "wan/2-7-image-to-video",
    "name": "Wan 2.7 Image to Video",
    "family": "wan",
    "description": "Wan 2.7 - Image to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Positive prompt. Maximum length: 5000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "watermark": false
    }
  },
  {
    "id": "wan-2-7-r2v--i2v",
    "slug": "wan/2-7-r2v",
    "name": "Wan 2.7 Reference to Video",
    "family": "wan",
    "description": "Wan 2.7 - Reference to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt. Required. Describes the desired elements and visual features in the generated video. Supports Chinese and English. Maximum length: 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "default": 5
      }
    },
    "imageField": "reference_image",
    "imageFieldType": "array",
    "maxImages": 5,
    "resolutionField": "resolution",
    "defaults": {
      "prompt_extend": true,
      "watermark": false
    }
  },
  {
    "id": "wan-3-0-video-prime--i2v",
    "slug": "wan/3-0-video-prime",
    "name": "Wan 3.0 Video Prime",
    "family": "wan",
    "description": "Wan 3.0 - Video Prime",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompt. Chinese and English are supported. Up to 20,000 characters. Required for text-to-video; for other modes, it is recommended to provide it together with media. In reference mode, use Image1"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "adaptive",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "default": "adaptive"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480P",
          "720P",
          "1080P"
        ],
        "default": "1080P"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "default": 5
      }
    },
    "imageField": "first_frame_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "resolutionField": "resolution",
    "defaults": {
      "audio": true
    }
  }
];

export const kieV2V = [
  {
    "id": "wan-2-7-videoedit--v2v",
    "slug": "wan/2-7-videoedit",
    "name": "Wan 2.7 Video Edit",
    "family": "wan",
    "description": "Wan 2.7 - Video Edit",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text prompt describing the expected elements and visual features in the generated video. Supports Chinese and English. Maximum length: 5000 characters."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "default": 0
      }
    },
    "videoField": "video_url",
    "videoFieldType": "string",
    "resolutionField": "resolution",
    "defaults": {
      "audio_setting": "auto",
      "prompt_extend": true,
      "watermark": false
    }
  },
  {
    "id": "runway-gen4-aleph--v2v",
    "slug": "runway/gen4-aleph",
    "name": "Generate Aleph Video",
    "family": "runway",
    "description": "Generate Aleph Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Describes how to transform the input video."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Aspect Ratio",
        "name": "aspect_ratio",
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1",
          "21:9"
        ],
        "default": "16:9"
      }
    },
    "videoField": "video_url",
    "videoFieldType": "string",
    "defaults": {
      "upload_cn": false
    }
  },
  {
    "id": "topaz-video-upscale--v2v",
    "slug": "topaz/video-upscale",
    "name": "Topaz Video Upscale",
    "family": "topaz",
    "description": "Topaz - Video Upscale",
    "hasPrompt": false,
    "requiresPrompt": false,
    "inputs": {},
    "videoField": "video_url",
    "videoFieldType": "string",
    "defaults": {
      "upscale_factor": "2"
    }
  },
  {
    "id": "happyhorse-video-edit--v2v",
    "slug": "happyhorse/video-edit",
    "name": "HappyHorse video-edit",
    "family": "happyhorse",
    "description": "HappyHorse - video-edit",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Required edit instruction describing the intended change (e.g., style transfer / local replacement). Up to 5,000 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      }
    },
    "videoField": "video_url",
    "videoFieldType": "string",
    "resolutionField": "resolution",
    "defaults": {
      "audio_setting": "auto",
      "seed": 0
    }
  },
  {
    "id": "wan-2-6-flash-video-to-video--v2v",
    "slug": "wan/2-6-flash-video-to-video",
    "name": "Wan 2-6-flash-video-to-video",
    "family": "wan",
    "description": "Wan - 2-6-flash-video-to-video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts for video generation. Supports Chinese and English, 2–1,500 characters."
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "1080p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "videoField": "video_urls",
    "videoFieldType": "array",
    "resolutionField": "resolution"
  },
  {
    "id": "wan-2-6-video-to-video--v2v",
    "slug": "wan/2-6-video-to-video",
    "name": "Wan 2.6 Video to Video",
    "family": "wan",
    "description": "Wan 2.6 - Video to Video",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Text prompts for video generation. Supports both Chinese and English, with a minimum of 2 characters and a maximum of 5,000 characters. (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Duration",
        "name": "duration",
        "enum": [
          "5",
          "10"
        ],
        "default": "5"
      }
    },
    "videoField": "video_urls",
    "videoFieldType": "array",
    "resolutionField": "resolution",
    "defaults": {
      "multi_shots": false
    }
  }
];

export const kieLipSync = [
  {
    "id": "omnihuman-1-5--lipsync-image",
    "slug": "omnihuman-1-5",
    "name": "Omnihuman 1.5",
    "family": "omnihuman-1-5",
    "description": "Omnihuman 1.5",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional. Supported languages: Chinese, English, Japanese, Korean, Spanish, Indonesian. Up to 300 characters."
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "audioField": "audio_url",
    "audioFieldType": "string",
    "defaults": {
      "output_resolution": "1080",
      "pe_fast_mode": false,
      "seed": -1
    },
    "category": "image"
  },
  {
    "id": "omnihuman-2-0--lipsync-image",
    "slug": "omnihuman-2-0",
    "name": "Omnihuman 2.0",
    "family": "omnihuman-2-0",
    "description": "Omnihuman 2.0",
    "hasPrompt": true,
    "requiresPrompt": false,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Optional text prompt for precise control of the scene, character motion, and camera movement. Supported languages: Chinese, English, Japanese, Korean, Spanish (Mexican), Indonesian. Up to 300 characte"
      }
    },
    "imageField": "image_urls",
    "imageFieldType": "array",
    "maxImages": 10,
    "audioField": "audio_url",
    "audioFieldType": "string",
    "defaults": {
      "enable_watermark": true
    },
    "category": "image"
  },
  {
    "id": "infinitalk-from-audio--lipsync-image",
    "slug": "infinitalk/from-audio",
    "name": "Infinitalk From Audio",
    "family": "infinitalk",
    "description": "Infinitalk - From Audio",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt to guide video generation. (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "audioField": "audio_url",
    "audioFieldType": "string",
    "resolutionField": "resolution",
    "category": "image"
  },
  {
    "id": "kling-ai-avatar-pro--lipsync-image",
    "slug": "kling/ai-avatar-pro",
    "name": "Kling AI Avatar Pro",
    "family": "kling",
    "description": "Kling AI Avatar Pro",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Required, non-empty. Describe the avatar's expression, movement and camera; the speech comes from audio_url. Up to 5,000 characters."
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "audioField": "audio_url",
    "audioFieldType": "string",
    "category": "image"
  },
  {
    "id": "kling-ai-avatar-standard--lipsync-image",
    "slug": "kling/ai-avatar-standard",
    "name": "Kling AI Avatar Standard",
    "family": "kling",
    "description": "Kling AI Avatar Standard",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "Required, non-empty. Describe the avatar's expression, movement and camera; the speech comes from audio_url. Up to 5,000 characters."
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "audioField": "audio_url",
    "audioFieldType": "string",
    "category": "image"
  },
  {
    "id": "wan-2-2-a14b-speech-to-video-turbo--lipsync-image",
    "slug": "wan/2-2-a14b-speech-to-video-turbo",
    "name": "Wan 2.2 A14B Speech to Video Turbo",
    "family": "wan",
    "description": "Wan - 2.2 A14B Speech to Video Turbo",
    "hasPrompt": true,
    "requiresPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Prompt",
        "name": "prompt",
        "description": "The text prompt used for video generation (Max length: 5000 characters)"
      },
      "resolution": {
        "type": "string",
        "title": "Resolution",
        "name": "resolution",
        "enum": [
          "480p",
          "580p",
          "720p"
        ],
        "default": "480p"
      }
    },
    "imageField": "image_url",
    "imageFieldType": "string",
    "maxImages": 1,
    "audioField": "audio_url",
    "audioFieldType": "string",
    "resolutionField": "resolution",
    "defaults": {
      "num_frames": 80,
      "frames_per_second": 16,
      "num_inference_steps": 27,
      "guidance_scale": 3.5,
      "shift": 5
    },
    "category": "image"
  },
  {
    "id": "volcengine-video-to-video-lip-sync--lipsync-video",
    "slug": "volcengine/video-to-video-lip-sync",
    "name": "Volcengine video to video lip sync",
    "family": "volcengine",
    "description": "Volcengine video to video lip sync",
    "hasPrompt": false,
    "requiresPrompt": false,
    "inputs": {
      "mode": {
        "type": "string",
        "title": "Mode",
        "name": "mode",
        "enum": [
          "lite",
          "basic"
        ],
        "default": "lite"
      }
    },
    "videoField": "video_url",
    "videoFieldType": "string",
    "audioField": "audio_url",
    "audioFieldType": "string",
    "defaults": {
      "separate_vocal": false,
      "open_scenedet": false,
      "align_audio": true,
      "align_audio_reverse": false,
      "templ_start_seconds": 0
    },
    "category": "video"
  }
];
