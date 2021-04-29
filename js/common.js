document.addEventListener("DOMContentLoaded", () => {
  const { exec } = require("child_process");

  //dom elements
  const btn = document.getElementById("createStreambtn");
  const input_key = document.getElementById("key");
  const input_url = document.getElementById("url");

  console.log("tets");

  btn.onclick = () => {
    const stream_key = input_key.value;
    const stream_url = input_url.value;

    console.log(stream_url.value);

    if (stream_key.length > 0 && stream_url.length > 0) {
      console.log("stream");

      exec(
        `ffmpeg.exe -f gdigrab -rtbufsize 100M -framerate 30 -probesize 10M -draw_mouse 1 -i desktop -c:v libx264 -r 30 -preset ultrafast -tune zerolatency -crf 25 -pix_fmt yuv420p -f flv ${stream_url}${stream_key}`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
        }
      );
    } else alert("error");
  };
});
