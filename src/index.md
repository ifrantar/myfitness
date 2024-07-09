---
metaDesc: 'This is the fitness journey by Ivan Frantar'
layout: 'layouts/feed.html'
pagination:
  data: collections.notes
  size: 9
permalink: '/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
