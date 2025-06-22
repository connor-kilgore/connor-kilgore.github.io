---
layout: blog
feature_image: "/assets/photos/blog-hero-image.png"
title: Clean Coders Blog Posts
---

### Overview

Here is where I keep an archive of all my published blog posts

<div class="card-container">
  {% for post in site.cleancoders-posts %}
      <a href="{{ post.url }}" class="card"><h3>{{ post.title }}</h3> <p>{{ post.date | date: "%B %d, %Y" }}</p> </a>
  {% endfor %}
</div>