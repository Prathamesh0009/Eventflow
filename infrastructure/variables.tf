variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "eu-central-1"
}

variable "environment" {
  description = "Environment name (staging, production, dev)"
  type        = string
  default     = "dev"
}
