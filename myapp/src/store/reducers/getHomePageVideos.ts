import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store";
import axios from "axios";
import { parseData } from "../../utils";
import { HomePageVideos } from "../../Types";

const API_KEY=process.env.REACT_APP_YOTUBE_DATA_API_KEY;
const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3`

export const getHomePageVideos = createAsyncThunk("youtubeApp/homePageVidoes",async (isNext:boolean,{getState}) => {
    const {youTubeApp : {nextPageToken : nextPageTokenFromState,videos},} = getState() as RootState;
    const {data: { items, nextPageToken },} = await axios.get(
        `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
          isNext ? `pageToken=${nextPageTokenFromState}` : ""}`
      );
    //   console.log("ITEMS : ",items);
      const parsedData:HomePageVideos[] = await parseData(items);
    //   console.log("PARSEDDATA : ",parsedData);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
});