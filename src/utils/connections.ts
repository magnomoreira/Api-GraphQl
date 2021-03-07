import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://magno:201512@cluster0.yzz5i.mongodb.net/test?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}
);

