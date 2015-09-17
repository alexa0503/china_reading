<?php
namespace AppBundle\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="t_info")
 */
class Info
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
   
    /**
     * @ORM\Column(name="username",type="string", length=120)
     */
    protected $username;

    /**
     * @ORM\Column(name="email",type="string", length=120)
     */
    protected $email;

    
    /**
     * @ORM\Column(name="job",type="string", length=120)
     */
    protected $job;

    /**
     * @ORM\Column(name="mobile",type="string", length=200)
     */
    protected $mobile;
    /**
     * @ORM\Column(name="create_time",  type="datetime")
     */
    private $createTime;

    /**
     * @ORM\Column(name="create_ip", type="string", length=60)
     */
    private $createIp;
}
