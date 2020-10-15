import sys
import nltk

nltk.download('punkt')  #extra nltk resources we'll need to install

txt = sys.argv[0]

def sentence_count(txt):
    return len(nltk.sent_tokenize(txt))


if __name__ == "__main__":
    for i in range(len(txt)):
        print("Text " + str(i) + " sentence count: " + str(sentence_count(txt[i])))