import numpy as np
import pywt
import cv2


def w2d(img, mode='haar', level=1):
    imArray = img
    # convert to gray
    imArray = cv2.cvtColor(imArray, cv2.COLOR_RGB2GRAY)
    # convert to float
    imArray = np.float32(imArray)
    imArray /= 255 # normalize

    # compute coefficients (detect high-level frequencies and low-level frequencies)
    coeffs = pywt.wavedec2(imArray, mode, level=level)

    # process coefficients
    coeffs_H = list(coeffs)
    coeffs_H[0] *= 0 # remove low-level frequencies

    # reconstructions
    imArray_H = pywt.waverec2(coeffs_H, mode)
    imArray_H *= 255 # denormalize
    imArray_H = np.uint8(imArray_H) # convert back to number
    return imArray_H