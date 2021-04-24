/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const jeongboCheoliGisaRouter = {
  path: '/jeongbo-cheoli-gisa',
  component: Layout,
  redirect: '/',
  name: 'jeongbo-cheoli-gisa', 
  children: [
    {
      path: 'index',
      component: () => import('@/views/license/jeongbo-cheoli-gisa'),
      name: '정보처리기사',
      meta: { title: '정보처리기사', noCache: true }
    },
    {
      path: 'examination',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/examination'),
      name: '시험',
      meta: { title: '시험', noCache: true }
    },
    {
      path: 'examination-again',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/examination-again'),
      name: '틀린문제 다시풀기',
      meta: { title: '', noCache: true }
    },
    {
      path: 'examination-one',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/examination-one'),
      name: '한문제씩 풀기',
      meta: { title: '한문제씩 풀기', noCache: true }
    },
    {
      path: 'examination-word',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/examination-word'),
      name: '단어 외우기',
      meta: { title: '단어 외우기', noCache: true }
    },
    {
      path: 'license-information',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/license-information'),
      name: '자격증 정보',
      meta: { title: 'license-information', noCache: true }
    },
    {
      path: 'score-status',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/score-status'),
      name: '내 점수',
      meta: { title: '내 점수', noCache: true }
    },
    {
      path: 'acceptance-review',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/acceptance-review'),
      name: '합격 후기',
      meta: { title: '합격 후기', noCache: true }
    },
    {
      path: 'communication',
      component: () => import('@/views/license/jeongbo-cheoli-gisa/communication'),
      name: '소통',
      meta: { title: '소통', noCache: true }
    }
  ]
}
export default jeongboCheoliGisaRouter