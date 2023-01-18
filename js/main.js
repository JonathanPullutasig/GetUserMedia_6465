const video = document.querySelector('video');
const picture = document.querySelector('.shot');
async function videoStream (){
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            video:true,
            audio:false
        });

        video.srcObject = stream;
        document.addEventListener('keypress', e =>{
            if(e.code !== 'KeyK') return;
            const canvas = document.createElement('canvas');
            canvas.width = video.width;
            canvas.height = video.height;
            canvas.getContext('2d').drawImage(video, 0,0, video.width, video.height);
            let img = canvas.toDataURL('image/png').replace('image/png', 1.0);
            picture.src = img;
            const anchorTag = document.createElement('a');
            anchorTag.href = img;
            anchorTag.download = 'my-image.png';
            document.body.appendChild(anchorTag);
            anchorTag.click();
        });
    }catch(err){
        console.log(err);
    }
}
videoStream();