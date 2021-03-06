<?php

use Drupal\node\Entity\Node;

/**
 * Implements HOOK_theme_suggestions_HOOK_alter().
 */
function jcc_base_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  // Add a template suggestions for node type.
  /** @var \Drupal\node\NodeInterface $node */
  if ($node = \Drupal::routeMatch()->getParameter('node')) {
    if (is_numeric($node)) {
      $node = Node::load($node);
    }

    $suggestions[] = 'page__node__' . $node->bundle();
  }
}

/**
 * Implements HOOK_theme_suggestions_HOOK_alter().
 */
function jcc_base_theme_suggestions_user_alter(array &$suggestions, array $variables) {
  // Add a suggestion based on the view mode.
  $suggestions[] = $variables['theme_hook_original'] . '__' . $variables['elements']['#view_mode'];
}

/**
 * Implements HOOK_theme_suggestions_HOOK_alter().
 */
function jcc_base_theme_suggestions_region_alter(array &$suggestions, array $variables) {
  // Add a suggestion based on the view mode.
  $suggestions[] = $variables['theme_hook_original'] . '__' . $variables['elements']['#region'];
}
