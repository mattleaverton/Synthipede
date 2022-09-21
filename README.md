# Synthipede

## Intro

This semester I am embarking on a creative project to fulfill the requirements necessary to obtain a certificate in Digital Arts and Media through the Bridging Disciplines Program (BDP) at the University of Texas at Austin. The BDP at UT provides the opportunity for students within any major to earn a certificate in interdisciplinary studies spread among 11 concentrations. I chose Digital Arts and Media to add an element of film/music/creativity to my major of Electrical/Computer Engineering. The conclusion of this program depends on a creative project that bridges my disciplines and is a culmination of what I have learned through the process.

### The Problem

To meet the requirements of the project, I am to have two professors mentor me through a semester long project that will showcase my skills and bridge disciplines. This semester I am taking Intro to Computer Music (MUS329J) which covers the use of Max/MSP for music making and in the 2D Video Game Capstone in which teams develop 2D games using Unity3D. Taking this into account and my programming experience from EE, I chose to bridge the disciplines of electrical engineering (programming side), art (video games), and music (music, obviously) to create a video game with an interactive soundtrack. 

### Background

The base of the project will be created in Unity3D, which is a video game engine that has been made available for free (with a few limitations and features missing). Unity is a very powerful and capable engine with lots of built in tools to make basic video game design accessible to amateurs like me. This coupled with the price (free), loads of documentation, copious instructional videos, the fact that I'm using this in a class, and an extremely vibrant community make this the obvious choice for simple video game development. Additionally, everything can be extended, controlled and customized by using Javascript and/or C# which makes this a good learning experience (seeing as I do not know too much of either). This way I can make just about anything happen that I need to happen as far as the game goes. 

Typically, video game music has been reasonably static. When your character makes a move or action, a corresponding sound plays and in one area, this song plays, in the next area, this song plays. This follows the basic structure of film audio which is a linear medium and this methodology is well-established in the minds of every human being. One particular draw of video games is the dynamic nature of the play - everything changes depending upon the actions and movements of the player. Most recent video games have reactive elements depending on the state of the game (danger vs. safety and such) and naturally have sound effects and atmospheric noise. But most games do not take advantage of the flexibility of the medium to provide an audio experience to the user that is unique as their style of play. The computer game Spore released by Maxis begins to delve into the massive realm of possibilities that is procedural video game audio. Game designer Will Wright worked with electronic composer/producer Brian Eno to adapt Pure Data (PD) (a visual programming language conducive for work in sound synthesis and interactive composition) to create a soundtrack that generated based on the player's actions, choices, and style of play.

Max/MSP (hereafter referred to as simply Max) is the commercial version of PD and as I mentioned earlier, I am in a class for this software and intend to use it to process game data from Unity to generate a soundtrack. Max is an incredibly powerful program that can be used for all sorts of data and audio manipulation, signal processing, sound synthesis, interactive music creation, and so much more. 


### The Particulars

I am exploring the art of procedural sound in video games by creating a simple video game in Unity3D where the actions of a character are sent to Max/MSP and processed to create a soundtrack that is fully dependent upon character interaction. The game itself isn't set in stone yet, but will involve a controllable character who is interacting with the world to manipulate audio. This is going to be developing over the next month and a half or so. 

#### Further Reading

* http://www.utexas.edu/ugs/bdp/programs/dam
* http://gamedev.utexas.edu/
* http://ems.music.utexas.edu/program/mus329j/
* http://www.gamespot.com/articles/a-history-of-video-game-music/1100-6092391/
* http://createdigitalmusic.com/2007/06/brian-eno-with-wright-on-spore-and-generative-systems-sound-and-paintings/
* http://www.uni-weimar.de/medien/wiki/images/Usage_of_Pd_in_Spore_and_Darkspore.pdf
* http://www.obiwannabe.co.uk/tutorials/html/intro_games_synthesis.html
* http://www.videogameaudio.com/


## Update 1

This project is a little bit amorphous as I discover my skills both in Unity and Max/MSP and balance what I am able to accomplish with the time that I have allotted. The current goal of the project is to make a simple video game thats primary purpose is the making of music by how the character interacts with its surroundings. This music will be generated in Max/MSP which is also creating backing music based on character movements and habits that will be tracked. 

The first piece of the puzzle that I approached is the connection between Unity and Max/MSP. The first technique to accomplish this that I discovered was a toolkit called *myu* - the Max Unity Interoperability Toolkit - [here](http://cycling74.com/forums/topic/ann-myu-max-unity-interoperability-toolkit-v-1-0-released/) and [here](http://disis.music.vt.edu/main/portfolio.php) from the Digital Interactive Sound & Intermedia Studio at Virginia Tech. This toolkit enables two way communication and control of a vast number of parameter in both programs over a TCP/IP connection. This is in line with what I was looking for, but I did not need the complexity, bandwidth, or even bidirectional communication that this approach offered, so I continued to look for a more simple approach. 

After some research, I found the [Game Audio Middleware](http://gameaudiomiddleware.tumblr.com) project by Yiannis Ioannides  who was creating a project for a senior project at Berklee that would add precomposed sections to the soundtrack based on the sound energy levels in the game. This would have the effect of dynamically increasing the intensity of the music to match the intensity of the gameplay as a technique to immerse the player further in the game. He sent parameters from Unity over a UDP connection to Max/MSP, which would play music based on the data it received. 

This idea (at least in the Unity/Max connection) was similar enough to mine that I read further. After exploring his ideas, I realized that I can do something similar to what he did with a very simple UDP server created in Unity that is connected to Max/MSP. He details fully how he went through everything in Unity so that is pretty easy to follow. I used the project that he made to test the idea in my own setup and see if it was viable method of communication.

On the Max/MSP side, the standard piece used for UDP communication is the *udpreceive* object. I tried to use this, but kept getting an error upon receipt of a data packet. Reading into the error, I learned that the *udpreceive* object is geared primarily toward OSC (open sound control - the potential next step from MIDI) communication and didn't like any data that was not an OSC packet. Upon digging deeper in the Max documentation, I discovered the *mxj net.udprecv* object which uses Java (mxj allows Max to use Java programs) to receive UDP communication. This method worked!

For the final step, now that I have communication established between the two programs, I wanted to keep my project in Github so that it would be open to anyone who wanted to copy it, play with it, try it, or just watch would be able to. I knew from my video game class that Unity and Github don't play super well together off the cuff that I needed to make some adjustments. Thanks to the advice in the [Unity docs] (http://docs.unity3d.com/Documentation/Manual/ExternalVersionControlSystemSupport.html), I was able to make the adjustments (changing how Unity manages the metafiles) and I used the same .gitignore file that my team was to ignore the unnecessary files (also detailed in the article). 

## Update 2

In this update, I created a basic game with a character controller so that I could begin to experiment with methods of tracking the user. I followed (roughly) the video tutorial [here on character controllers] (http://cgcookie.com/unity/2011/12/05/introduction-to-character-controllers/) to create a basic terrain and a first person character controller to walk around in it.

In following with the example laid forth in the middleware discussed in the last post, I assigned a couple scripts to some empty game objects to initiate UDP communication and to enable the gathering and sending of important information from Unity. The UDP communication script is directly from that project and the other scripts are heavily derivative of the project discussed in the last post at this time (for testing purposes).

This first test of user tracking and communication between the programs past the level of saying hello involves tracking how long the player is holding each of the buttons for movement. Back a couple paragraphs ago, I set up a first person character controller that is controlled with WASD and the mouse. Unity will alert Max when one of the WASD buttons has been pressed and also when it has been released. Max will keep a running tab on how long each of the buttons has been held down in total by the user.

In the [UDPOUT.cs](https://github.com/mattleaverton/Synthipede/blob/master/Unity/Assets/Plugins/UdpOut.cs) script (written by Yiannis), Unity establishes a UDP connection with Max and defines the methods used to send data chunks. Max is listening on port 7470 for the data that Unity is sending.

The [GAMESTART.js](https://github.com/mattleaverton/Synthipede/blob/master/Unity/Assets/Scripts/gameStart.js) script (greatly amended to suit my needs for this test) watches the WASD keys and amends a variable in the code to send to Max when the button is idle, when it is pressed, and when it is released.

[MAXLAUNCH.cs](https://github.com/mattleaverton/Synthipede/blob/master/Unity/Assets/Plugins/MaxLaunch.cs) (also heavily amended for my purposes) takes the variable states that have been amended by the previous script and continuously sends them to Max (when they are valuable data - Max will know when the button is turned on and turned off and not worry about idle state - it only needs the edges). 

This is the corresponding patcher in Max that tracks what Unity is sending. Each data packet from Unity has two parts: a value name (as a string) and then the value itself (an int in this case). All of the data comes into Max through the UDP object and then is parsed by the *route* object that sorts the incoming data out into different outputs based on the variable name. 

![alt text](https://github.com/mattleaverton/Synthipede/blob/master/media/maxA.png "MAX Patcher A")

The data coming out is the value which is used to start and stop a timer which increments every tenth of a second while the button is held down.

![alt text](https://github.com/mattleaverton/Synthipede/blob/master/media/maxB.png "MAX Patcher B")

## Update 3

The major change I made in this update was the addition of a day/night cycle to the game. The game now has a sun that rotates periodically (day length specified by the user) and the day and night sky transition nicely. I followed this [lovely tutorial set](http://www.burgzergarcade.com/tutorials/game-engines/unity3d/072-unity3d-tutorial-day-night-cycle-part-1) from Burg Zerg Arcade (they have a lot of awesome tutorials for Unity). 

![alt text](https://github.com/mattleaverton/Synthipede/blob/master/media/3_day.png "Day Cycle")

Probably the largest portion (at least the greatest visual impact) of this effect is the transition of the day to night sky which is based on a [community compiled shader](http://wiki.unity3d.com/index.php?title=SkyboxBlended) that makes this possible. This allows you to take a traditionally static [skybox](http://en.wikipedia.org/wiki/Skybox_(video_games)) and blend between two different sets of images. In this case, you can have a lovely day sky and a nice set of stars and blend between the two of them based on the time of day for a really cool effect.
 
I also now have a sun that rotates around the world, giving both light and a sense of time. This is also from the cool previously mentioned tutorial. Soon I will be adding a moon so that the night time has a light source as well. The day/night cycle times will control different music for night and day so that the audio matches the visuals.

![alt text](https://github.com/mattleaverton/Synthipede/blob/master/media/3_piano.png "Terrain Piano")

From the music side of things, I added a large playable piano. The player can play a tune when they run around on the keys. Nothing too fancy going on here, just triggers being sent to Max based on which key has been collided with. From the tracking side of things, Max now is tracking the XYZ position of the player and the rotation of the view. 

![alt text](https://github.com/mattleaverton/Synthipede/blob/master/media/3_max.png "MAX Piano Patcher")

Lastly, for fun I played with making different terrains by creating height-maps in Photoshop. You can create some really amazing landscapes with a few clicks and by changing colors. A height-map is a simple black and white image where white corresponds to the highest height and black corresponds to the lowest depth. Any fade or gradient comes out as a hill or ramp. I followed some of the tutorials and instructions by [Jason Sturges](http://www.jasonsturges.com/2012/12/creating-a-terrain-for-unity-3d-with-photoshop/) to pretty exciting results.

![alt text](https://github.com/mattleaverton/Synthipede/blob/master/media/3_terrain.png "Terrain")

### Brainstorming

I also wanted to share some of the brainstorming I have been doing for where this can go/how I can track the user/parameters I can use to generate music:

Create wind noises using a Max/MSP wind generator I made for class

Have large field that music changes depending on where you walk
- [Vector Synthesis](http://en.wikipedia.org/wiki/Vector_synthesis)
  - where you are determines the sound
  - chords playing in the background through the synth being controlled
  - chords change with time

Some notes tied to footsteps
  - not often enough as to be annoying
  - enough as to give the idea of walking

Manipulate objects to create new sounds
  - spawning certain objects to create music
  - rolling balls around in a half-pipe or ramp to generate periodic signals

Parameters that can be controlled by the user
- position in vector synthesis
- frequencies of carrier or modulator waves
     - both AM and FM
- time between chord changes
- key of the main music
- density of texture for [granular synthesis](http://en.wikipedia.org/wiki/Granular_synthesis)
