from turtle import back
import qrcode

code = qrcode.QRCode(
    version=1,
    error_correction = qrcode.constants.ERROR_CORRECT_L,
    box_size= 50,
    border= 0
)

code.add_data('https://www.linkedin.com/in/denizcanmaya/')
code.make(fit=True)
image = code.make_image(fill_color="black")
image.save('qr1.png')