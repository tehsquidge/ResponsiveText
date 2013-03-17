ResponsiveText
==============

Rescale text depending on browser width.

We rescale the text based on the max-width of its container. the general idea is that if we reduce the container 50%
the text-size should scale down accordingly by 50%.

to achieve this the container must have a max-width and a font-size of 1em. all containing elements must be sized
relative to the containing div in em.

