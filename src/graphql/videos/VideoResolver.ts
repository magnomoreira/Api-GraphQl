import Video from './Video';
import VideoSchema from  '../../model/videoSchema';
import { Arg, Field, InputType, Resolver } from 'type-graphql';

@InputType()
class VideoInput{
    @Field()
    description: String;
    @Field()
    name: String;
    @Field()
    category: String;

}

@Resolver(Video)
class VideoResolver {
async video(){
    const videos = await  VideoSchema.find();
    return videos;
}

async createVideos(@Arg("videoInput") videoInput : VideoInput){
    const video = await VideoSchema.create(videoInput);
    return video;
}
    
}
export default VideoResolver;