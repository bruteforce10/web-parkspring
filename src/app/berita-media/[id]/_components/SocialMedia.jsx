"use client";
import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SocialMedia = () => {
  const url = window?.location?.href;

  return (
    <div className="space-x-4 space-y-4">
      <h4 className="text-2xl font-medium">Share Social Media</h4>
      <FacebookShareButton url={url}>
        <FacebookIcon size={42} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={42} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={42} round={true} />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={42} round={true} />
      </EmailShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={42} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={42} round={true} />
      </TelegramShareButton>
      <PinterestShareButton url={url}>
        <PinterestIcon size={42} round={true} />
      </PinterestShareButton>
    </div>
  );
};

export default SocialMedia;
