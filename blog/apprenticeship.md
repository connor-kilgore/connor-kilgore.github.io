---
layout: blog
feature_image: "/assets/photos/blog-hero-image.png"
title: Apprenticeship
---
### Overview

Welcome, this blog will serve as a log that I will update each work day
for my apprenticeship at Clean Coders over the coming months. Eventually this will be archived into my portfolio
after the conclusion of my apprenticeship. Here I intend to share my thoughts working at Clean Coders, and express
what I have learned and struggled on in detail.

<div class="card-container">
  {% for post in site.apprenticeship-posts %}
      <a href="{{ post.url }}" class="card"><h3>{{ post.title }}</h3> <p>{{ post.date | date: "%B %d, %Y" }}</p> </a>
  {% endfor %}
</div>