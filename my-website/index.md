---
layout: default
title: Home
---

<div class="cards">
  {% for project in site.pages %}
    {% if project.layout == "project" %}
      <div class="card">
        {% include projectcard.html project=project %}
      </div>
    {% endif %}
  {% endfor %}
</div>