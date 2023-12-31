import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store"
import { RecommendedVideos } from "../../Types";
import { parseRecommendedData } from "../../utils";

const API_KEY = process.env.REACT_APP_YOTUBE_DATA_API_KEY;
const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3`

export const getRecommendedVideos = createAsyncThunk(
  "yotubeApp/getRecommendedVideos",
  async (videoId: string, { getState }) => {
    const {
        youTubeApp: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState() as RootState;

    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData: RecommendedVideos[] = await parseRecommendedData(
      items,
      videoId
    );

    return { parsedData };
  }
);