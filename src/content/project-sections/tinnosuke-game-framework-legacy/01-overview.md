---
project: tinnosuke-game-framework-legacy
key: overview
title: Overview
order: 10
lede: Entity ごとに DI コンテナを持たせる設計を軸に、Unity 開発での柔軟な構成管理を目指したフレームワークです。
---

## 何を解決したかったか

ゲームロジックの依存関係を整理しつつ、Inspector 上での組み立てや共通変数管理も扱いやすくすることを目指しました。  
単なるユーティリティ集ではなく、制作全体を支える土台として設計しています。

## 提供していた考え方

- Entity 単位の DI コンテナ
- Inspector ベースのロジック構成
- 変数や状態の共通管理

