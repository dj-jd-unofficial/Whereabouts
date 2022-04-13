import hashlib
import subprocess, os

def encode_filename(start_address):
    result = hashlib.md5(start_address.encode())
  
    # printing the equivalent hexadecimal value.
    print("The hexadecimal equivalent of hash is : ", end ="")
    print(result.hexdigest())

    return result.hexdigest()

def reencode_video(filename):
    filepath_source = "..\\static\\{}.mp4".format(filename) # changed / to \
    filepath_output = '..\\static\\final_{}.mov'.format(filename) # changed / to \
    FFMPEG_PATH = "C:\\Users\\Jack\\Documents\\ffmpeg-4.4.1-essentials_build\\bin\\ffmpeg" # If on Linux based system, use "ffmpeg". If on Windows, download and extract ffmpeg from https://www.gyan.dev/ffmpeg/builds/#release-builds and point to the file path.

    try:
        subprocess.call([FFMPEG_PATH, '-i', filepath_source, filepath_output])
    finally:
        # always cleanup original even if there are errors
        # subprocess.call(['rm', filepath_source]) # The rm command doesn't work on Windows. Find another way to delete video files to prevent them from accumulating.
        print("hi") 

    return filepath_output
    
