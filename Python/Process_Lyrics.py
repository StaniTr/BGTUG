import re

print("Started")

# files names - src and trg

src_file_name = "Another_one_Bites_the_Dust.txt"
trg_file_name = "words_" + src_file_name

# open the target file
trg_file = open(trg_file_name,"w")


with open(src_file_name) as f:
    trg_file.write("Words")
    trg_file.write("\n")
    for line in f:
        for word in re.findall(r'\w+', line):
            trg_file.write(word.lower())
            # put a new line before the next word
            trg_file.write("\n")

trg_file.close()

print("Finished")

# Lyrics: https://www.azlyrics.com/lyrics/queen/anotheronebitesthedust.html
