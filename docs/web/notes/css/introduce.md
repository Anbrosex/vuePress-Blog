#  Introduce(css) #

::: tip
层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。
:::


<div id="bingan">
<img src="/images/qian.svg" >
<img src="/images/hou.svg" >
</div>


<style type="text/css">
			#bingan{
				perspective:500px;
				position: relative;
				width: 224px;
				height: 224px;
				margin: 100px auto;
			}
			#bingan img{
				position: absolute;
				top: 0;
				left: 0;
				animation: run 3s linear infinite;
			}
			#bingan img:first-child{
				z-index: 1;
				backface-visibility: hidden;
			}
			#bingan:hover img{
				animation-play-state:paused;
			}
			/* div:hover img:first-child{
				z-index: 0;
			} */
			@keyframes run{
				from{
					transform: rotateY(0deg);
				}to{
					transform: rotateY(360deg);
				}
			}
		</style>