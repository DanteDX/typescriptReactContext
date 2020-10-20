import React,{createContext} from 'react';



interface PostInterface{
    posts:{id:number,postContent:string}[];
    postDummy:()=>void;
}

export const PostContext = createContext<PostInterface | null>(null);

class PostContextProvider extends React.Component{
    state = {
        posts:[
            {id:1,postContent:'A new kind of processor was invented'},
            {id:2,postContent:'Facebook now a new kind of design'},
            {id:3,postContent:'Laptops now a days are much more cheaper than before'},
            {id:4,postContent:'We need to study more'}
        ]
    }
    postDummy = () =>{
        console.log('This is the PostDummy function');
    }

    render(){
        return(
            <PostContext.Provider value={{posts:this.state.posts,postDummy:this.postDummy}}>
                {this.props.children}
            </PostContext.Provider>
        )
    }
}

export default PostContextProvider;