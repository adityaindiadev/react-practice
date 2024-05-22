import React, { useMemo, useState } from 'react'

function getUniqueID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function CommentView({ comment = {}, updateComments }) {

    const [reply, setReply] = useState("")

    const [replyToggle, setReplyToggle] = useState(false)

    const toggle = () => setReplyToggle((v) => {
        return !v
    })

    return (
        <>
            <div>{comment?.msg}</div>

            <button onClick={toggle} style={{ marginLeft: 10, }}> Reply </button>
            <br />

            {replyToggle &&

                <input style={{ marginTop: 5 }} value={reply} type="text" onChange={(event) => {
                    event.preventDefault()

                    

                    setReply(event.currentTarget.value)

                }} onKeyDown={(event) => {
                    // console.log(event.key);

                    if (event.key === "Enter") {

                        if (reply === '') {
                            return
                        }

                        console.log(comment.reply.push({
                            id: getUniqueID(),
                            msg: reply,
                            reply: []
                        },));

                        updateComments()
                        setReply('')
                        toggle()

                    }
                }} />
            }
        </>
    )
}

function CommentComp({ updateComments = () => { }, commentArr = [], }) {


    return (
        <>
            {

                commentArr.map((comment) => {



                    return (
                        <div style={{ marginLeft: 20, marginTop: 10 }} key={comment?.id}>

                            <CommentView comment={comment} updateComments={updateComments} />

                            <CommentComp updateComments={updateComments} commentArr={comment?.reply} />

                        </div>
                    )

                })
            }
        </>
    )


}


function Comments() {

    const [comments, setComments] = useState([

        {
            id: getUniqueID(),
            msg: "First Comment",
            reply: []
        }

    ])

    const [first, setfirst] = useState(false)

    const commentsForRendering = useMemo(() => structuredClone(comments), [comments]) 

    console.log("render");

    function updateComments(id) {
        setComments(structuredClone(commentsForRendering))
    }

    return (
        <div style={{ backgroundColor: '#FCFBF4' }}>
            <button onClick={() => {
                console.log(comments)
                
                //for force Rendering
                setfirst(v=>!v)
            }}>View</button>

            <CommentComp updateComments={updateComments} commentArr={commentsForRendering} />

        </div>
    )
}

export default Comments