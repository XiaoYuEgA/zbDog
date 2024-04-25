from qcloud_cos import CosConfig
from qcloud_cos import CosS3Client


class cos:
    def __init__(self):
        __SecretId = ''
        __SecretKey = ''
        __region = ''

        __config = CosConfig(Region=__region, SecretId=__SecretId, SecretKey=__SecretKey)
        self.__client = CosS3Client(__config)

    def getImageName(self):
        fileName = []
        response = self.__client.list_objects(Bucket='', Prefix='zbimages/')
        if 'Contents' in response:
            for content in response['Contents']:
                fileName.append(content['Key'])
        return fileName[1:]

    def getImageUrl(self, fileName):
        zbImagesUrl = []
        for name in fileName:
            url = self.__client.get_object_url(Bucket='', Key=f"{name}")
            zbImagesUrl.append(url)
        return zbImagesUrl


if __name__ == '__main__':
    cos = cos()
    fileName = cos.getImageName()
    zbImagesUrl = cos.getImageUrl(fileName)
    print(zbImagesUrl)
