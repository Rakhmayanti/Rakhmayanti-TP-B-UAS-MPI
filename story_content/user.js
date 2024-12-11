function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qXkfakX5QI":
        Script1();
        break;
      case "6EyH9ZQ0GKE":
        Script2();
        break;
      case "5dgDYnCI2Gv":
        Script3();
        break;
      case "6dbiGmO06If":
        Script4();
        break;
      case "6qo9LYGozBJ":
        Script5();
        break;
      case "6nqS8TbKXdC":
        Script6();
        break;
      case "5pO9D9hDDXx":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.play();

audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.3;
}

function Script3()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.3;
}

function Script4()
{
  var audio = document.getElementById('bgSong')
;
audio.volume = 0.5;
}

function Script5()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.7;
}

function Script6()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.9;
}

function Script7()
{
  var audio = document.getElementById('bgSong');

audio.volume = 0.3;
}

