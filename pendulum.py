import pygame
from numpy import cos, sin, pi

pygame.init()
clock = pygame.time.Clock()

width, height = 1000, 800

screen = pygame.display.set_mode([width,height])
pygame.display.set_caption("Pendulum")

angle = pi/2
length = 400
gravity = 1

angle_vel = 0
angle_acc = 0

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.fill((0,0,0))

    x = length * sin(angle) + width/2
    y = length * cos(angle) + 40

    angle_acc = -(sin(angle) * gravity) / length
    angle_vel += angle_acc
    angle += angle_vel

    pygame.draw.line(screen, (255,255,255), (width/2,40), (x,y))    
    pygame.draw.circle(screen, (255,0,0), (x, y), 40)

    pygame.display.flip()
    clock.tick(60)
    pygame.display.update()
